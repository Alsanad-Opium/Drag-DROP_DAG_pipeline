// llmNode.js

import { Handle, Position } from 'reactflow';

export const LLMNode = ({ id, data }) => {
  return (
    <div style={{
      width: 200,
      height: 80,
      backgroundColor: 'var(--node-background)',
      border: '1px solid var(--node-border)',
      borderRadius: '8px',
      padding: '10px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      transition: 'all 0.3s ease'
    }}>
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-system`}
        style={{
          top: `${100/3}%`,
          background: 'var(--edge-color)',
          width: '8px',
          height: '8px'
        }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        style={{
          top: `${200/3}%`,
          background: 'var(--edge-color)',
          width: '8px',
          height: '8px'
        }}
      />
      <div style={{
        fontWeight: 'bold',
        color: 'var(--text)',
        fontSize: '14px'
      }}>
        <span>LLM</span>
      </div>
      <div style={{
        color: 'var(--text)',
        fontSize: '12px',
        opacity: 0.8
      }}>
        <span>This is a LLM.</span>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-response`}
        style={{
          background: 'var(--edge-color)',
          width: '8px',
          height: '8px'
        }}
      />
    </div>
  );
}
