// toolbar.js

import { DraggableNode } from './draggableNode';
import { useStore } from './store';

export const PipelineToolbar = ({ onThemeToggle, theme }) => {
    const { nodes, edges, onNodesChange, onEdgesChange } = useStore();

    const handleClearAll = () => {
        if (window.confirm('Are you sure you want to clear the entire canvas? This will remove all nodes and connections.')) {
            // Clear nodes
            onNodesChange(nodes.map(node => ({
                id: node.id,
                type: 'remove'
            })));
            // Clear edges
            onEdgesChange(edges.map(edge => ({
                id: edge.id,
                type: 'remove'
            })));
        }
    };

    const handleClearNodes = () => {
        if (window.confirm('Are you sure you want to clear all nodes? This will remove all nodes but keep the connections.')) {
            // Clear nodes
            onNodesChange(nodes.map(node => ({
                id: node.id,
                type: 'remove'
            })));
        }
    };

    const buttonStyle = {
        padding: '8px 16px',
        backgroundColor: '#dc3545',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '14px',
        marginLeft: '10px',
        transition: 'background-color 0.2s ease',
        '&:hover': {
            backgroundColor: '#c82333',
        },
    };

    const themeButtonStyle = {
        ...buttonStyle,
        backgroundColor: theme === 'light' ? '#343a40' : '#f8f9fa',
        color: theme === 'light' ? '#ffffff' : '#000000',
        '&:hover': {
            backgroundColor: theme === 'light' ? '#23272b' : '#e2e6ea',
        },
    };

    return (
        <div className="toolbar" style={{ padding: '10px' }}>
            <div style={{ 
                marginTop: '20px', 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '10px',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    <DraggableNode type='customInput' label='Input' />
                    <DraggableNode type='llm' label='LLM' />
                    <DraggableNode type='customOutput' label='Output' />
                    <DraggableNode type='text' label='Text' />
                    <DraggableNode type='filter' label='Filter' />
                    <DraggableNode type='transform' label='Transform' />
                    <DraggableNode type='aggregate' label='Aggregate' />
                    <DraggableNode type='join' label='Join' />
                    <DraggableNode type='split' label='Split' />
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button 
                        onClick={onThemeToggle}
                        style={themeButtonStyle}
                    >
                        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
                    </button>
                    <button 
                        onClick={handleClearNodes}
                        style={{
                            ...buttonStyle,
                            backgroundColor: '#6c757d',
                            '&:hover': {
                                backgroundColor: '#5a6268',
                            },
                        }}
                    >
                        Clear Nodes
                    </button>
                    <button 
                        onClick={handleClearAll}
                        style={buttonStyle}
                    >
                        Clear All
                    </button>
                </div>
            </div>
        </div>
    );
};
