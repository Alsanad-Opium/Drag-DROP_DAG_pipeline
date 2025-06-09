// outputNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  const inputStyle = {
    backgroundColor: 'var(--node-background)',
    border: '1px solid var(--node-border)',
    borderRadius: '4px',
    padding: '4px 8px',
    color: 'var(--text)',
    fontSize: '12px',
    width: '100%',
    marginTop: '4px'
  };

  const selectStyle = {
    ...inputStyle,
    cursor: 'pointer'
  };

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
        id={`${id}-value`}
        style={{
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
        <span>Output</span>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '4px'
      }}>
        <label style={{ color: 'var(--text)', fontSize: '12px' }}>
          Name:
          <input 
            type="text" 
            value={currName} 
            onChange={handleNameChange}
            style={inputStyle}
          />
        </label>
        <label style={{ color: 'var(--text)', fontSize: '12px' }}>
          Type:
          <select 
            value={outputType} 
            onChange={handleTypeChange}
            style={selectStyle}
          >
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </label>
      </div>
    </div>
  );
}
