import { useState } from 'react';
import { ReactFlowProvider } from 'reactflow';
import { PipelineUI } from './ui';
import { PipelineToolbar } from './toolbar';
import { validateGraph } from './utils/graphUtils';
import './index.css';

function App() {
  const [theme, setTheme] = useState('light');
  const [submittedPipeline, setSubmittedPipeline] = useState(null);
  const [dagStatus, setDagStatus] = useState(null);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme === 'light' ? 'dark' : 'light');
  };

  const handleSubmit = (nodes, edges) => {
    // Create a pipeline configuration from nodes and edges
    const pipeline = {
      nodes: nodes.map(node => ({
        id: node.id,
        type: node.type,
        data: node.data,
        position: node.position
      })),
      edges: edges.map(edge => ({
        id: edge.id,
        source: edge.source,
        target: edge.target,
        type: edge.type
      }))
    };

    // Check if the graph is a DAG
    const validation = validateGraph(nodes, edges);
    setDagStatus(validation.isValid ? 'Graph is a valid DAG.' : `Graph is NOT a DAG: ${validation.message}`);
    setSubmittedPipeline(pipeline);
  };

  return (
    <div className="app" data-theme={theme}>
      <PipelineToolbar onThemeToggle={toggleTheme} />
      <ReactFlowProvider>
        <PipelineUI onSubmit={handleSubmit} />
      </ReactFlowProvider>
      <div style={{ maxWidth: 800, margin: '32px auto', padding: 24, background: 'var(--node-background)', border: '1px solid var(--node-border)', borderRadius: 8, color: 'var(--text)' }}>
        {dagStatus && <div style={{ marginBottom: 16, fontWeight: 'bold' }}>{dagStatus}</div>}
        {submittedPipeline && (
          <>
            <div style={{ marginBottom: 8, fontWeight: 'bold' }}>Summary:</div>
            <div style={{ marginBottom: 12 }}>
              Nodes: <b>{submittedPipeline.nodes.length}</b> &nbsp; | &nbsp; Edges: <b>{submittedPipeline.edges.length}</b>
            </div>
            <div style={{ marginBottom: 8, fontWeight: 'bold' }}>Submitted Pipeline Configuration:</div>
            <pre style={{ background: 'var(--background)', color: 'var(--text)', padding: 12, borderRadius: 4, overflowX: 'auto' }}>
              {JSON.stringify(submittedPipeline, null, 2)}
            </pre>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
