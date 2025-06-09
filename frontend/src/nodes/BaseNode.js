import React from 'react';
import { Handle, Position } from 'reactflow';
import { sharedStyles } from '../styles/sharedStyles';

const BaseNode = ({
  id,
  data,
  title,
  inputs = [],
  outputs = [],
  children,
  style = {},
}) => {
  const baseStyle = {
    ...sharedStyles.node.base,
    ...style,
  };

  const handleStyle = {
    background: 'var(--edge-color)',
    width: '8px',
    height: '8px',
    border: '2px solid var(--node-background)',
    transition: 'all 0.3s ease',
  };

  return (
    <div style={baseStyle}>
      <div style={sharedStyles.node.title}>{title}</div>
      {children}
      
      {/* Input Handles */}
      {inputs.map((input, index) => (
        <Handle
          key={`input-${index}`}
          type="target"
          position={Position.Left}
          id={`${id}-input-${index}`}
          style={{ 
            ...handleStyle,
            top: `${((index + 1) * 100) / (inputs.length + 1)}%`,
          }}
        />
      ))}
      
      {/* Output Handles */}
      {outputs.map((output, index) => (
        <Handle
          key={`output-${index}`}
          type="source"
          position={Position.Right}
          id={`${id}-output-${index}`}
          style={{ 
            ...handleStyle,
            top: `${((index + 1) * 100) / (outputs.length + 1)}%`,
          }}
        />
      ))}
    </div>
  );
};

export default BaseNode; 