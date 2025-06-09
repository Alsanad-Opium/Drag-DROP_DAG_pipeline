// ui.js
// Displays the drag-and-drop UI
// --------------------------------------------------

import { useState, useRef, useCallback } from 'react';
import ReactFlow, { Controls, Background, MiniMap, useReactFlow } from 'reactflow';
import { useStore } from './store';
import { shallow } from 'zustand/shallow';
import { InputNode } from './nodes/inputNode';
import { LLMNode } from './nodes/llmNode';
import { OutputNode } from './nodes/outputNode';
import { TextNode } from './nodes/textNode';
import { FilterNode } from './nodes/filterNode';
import { TransformNode } from './nodes/transformNode';
import { AggregateNode } from './nodes/aggregateNode';
import { JoinNode } from './nodes/joinNode';
import { SplitNode } from './nodes/splitNode';
import { validateConnection, validateGraph } from './utils/graphUtils';

import 'reactflow/dist/style.css';

const gridSize = 20;
const proOptions = { hideAttribution: true };
const nodeTypes = {
  customInput: InputNode,
  llm: LLMNode,
  customOutput: OutputNode,
  text: TextNode,
  filter: FilterNode,
  transform: TransformNode,
  aggregate: AggregateNode,
  join: JoinNode,
  split: SplitNode,
};

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  getNodeID: state.getNodeID,
  addNode: state.addNode,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

export const PipelineUI = ({ onSubmit }) => {
    const reactFlowWrapper = useRef(null);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);
    const [validationError, setValidationError] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const { getViewport, setViewport } = useReactFlow();

    const {
      nodes,
      edges,
      getNodeID,
      addNode,
      onNodesChange,
      onEdgesChange,
      onConnect: storeOnConnect
    } = useStore(selector, shallow);

    const getInitNodeData = (nodeID, type) => {
      let nodeData = { id: nodeID, nodeType: `${type}` };
      return nodeData;
    }

    const onDrop = useCallback(
        (event) => {
          event.preventDefault();
          setIsDragging(false);
    
          const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
          if (event?.dataTransfer?.getData('application/reactflow')) {
            const appData = JSON.parse(event.dataTransfer.getData('application/reactflow'));
            const type = appData?.nodeType;
      
            // check if the dropped element is valid
            if (typeof type === 'undefined' || !type) {
              return;
            }
      
            const position = reactFlowInstance.project({
              x: event.clientX - reactFlowBounds.left,
              y: event.clientY - reactFlowBounds.top,
            });

            const nodeID = getNodeID(type);
            const newNode = {
              id: nodeID,
              type,
              position,
              data: getInitNodeData(nodeID, type),
            };
      
            addNode(newNode);
          }
        },
        [reactFlowInstance, getNodeID, addNode]
    );

    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
        setIsDragging(true);
    }, []);

    const onConnectStart = useCallback((event) => {
        setIsDragging(true);
    }, []);

    const onConnectEnd = useCallback((event) => {
        setIsDragging(false);
    }, []);

    const handleConnect = useCallback((params) => {
        const validation = validateConnection(params, nodes, edges);
        if (!validation.isValid) {
            setValidationError(validation.message);
            return;
        }
        setValidationError(null);
        storeOnConnect(params);
    }, [nodes, edges, storeOnConnect]);

    const handleSubmit = () => {
        const validation = validateGraph(nodes, edges);
        if (!validation.isValid) {
            setValidationError(validation.message);
            return;
        }
        setValidationError(null);
        if (onSubmit) {
            onSubmit(nodes, edges);
        }
    };

    const handleZoomIn = () => {
        const { x, y, zoom } = getViewport();
        setViewport({ x, y, zoom: zoom + 0.2 });
    };

    const handleZoomOut = () => {
        const { x, y, zoom } = getViewport();
        setViewport({ x, y, zoom: Math.max(0.1, zoom - 0.2) });
    };

    return (
        <>
        <div 
            ref={reactFlowWrapper} 
            style={{
                width: '100wv', 
                height: '70vh', 
                position: 'relative',
                cursor: isDragging ? 'grabbing' : 'default'
            }}
        >
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={handleConnect}
                onConnectStart={onConnectStart}
                onConnectEnd={onConnectEnd}
                onDrop={onDrop}
                onDragOver={onDragOver}
                onInit={setReactFlowInstance}
                nodeTypes={nodeTypes}
                proOptions={proOptions}
                snapGrid={[gridSize, gridSize]}
                connectionLineType='smoothstep'
                defaultViewport={{ x: 0, y: 0, zoom: 1 }}
                minZoom={0.1}
                maxZoom={2}
            >
                <Background color="var(--edge-color)" gap={gridSize} />
                <Controls />
                <MiniMap />
            </ReactFlow>
            <div style={{ 
                position: 'absolute', 
                bottom: '20px', 
                right: '20px',
                zIndex: 1000,
                display: 'flex',
                gap: '10px'
            }}>
                <button 
                    onClick={handleZoomIn}
                    style={{
                        padding: '8px 16px',
                        backgroundColor: 'var(--node-background)',
                        color: 'var(--text)',
                        border: '1px solid var(--node-border)',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '14px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    }}
                >
                    +
                </button>
                <button 
                    onClick={handleZoomOut}
                    style={{
                        padding: '8px 16px',
                        backgroundColor: 'var(--node-background)',
                        color: 'var(--text)',
                        border: '1px solid var(--node-border)',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '14px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    }}
                >
                    -
                </button>
                <button 
                    onClick={handleSubmit}
                    style={{
                        padding: '8px 16px',
                        backgroundColor: 'var(--node-background)',
                        color: 'var(--text)',
                        border: '1px solid var(--node-border)',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '14px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    }}
                >
                    Submit Pipeline
                </button>
            </div>
            {validationError && (
                <div style={{
                    position: 'absolute',
                    top: '20px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'rgba(220, 53, 69, 0.1)',
                    border: '1px solid rgba(220, 53, 69, 0.2)',
                    color: 'var(--text)',
                    padding: '12px 16px',
                    borderRadius: '4px',
                    zIndex: 1000,
                    maxWidth: '80%',
                    textAlign: 'center'
                }}>
                    {validationError}
                </div>
            )}
        </div>
        </>
    )
}
