import { useState } from 'react';
import BaseNode from './BaseNode';
import { sharedStyles } from '../styles/sharedStyles';

export const TransformNode = ({ id, data }) => {
  const [operation, setOperation] = useState(data?.operation || '');
  const [field, setField] = useState(data?.field || '');

  return (
    <BaseNode
      id={id}
      data={data}
      title="Transform"
      inputs={['input']}
      outputs={['output']}
    >
      <div>
        <div style={sharedStyles.node.label}>Field:</div>
        <input 
          type="text" 
          value={field} 
          onChange={(e) => setField(e.target.value)}
          style={sharedStyles.node.input}
          placeholder="Field name"
        />
        <div style={{ ...sharedStyles.node.label, marginTop: '8px' }}>Operation:</div>
        <select 
          value={operation} 
          onChange={(e) => setOperation(e.target.value)}
          style={sharedStyles.node.select}
        >
          <option value="">Select operation</option>
          <option value="uppercase">Uppercase</option>
          <option value="lowercase">Lowercase</option>
          <option value="trim">Trim</option>
          <option value="reverse">Reverse</option>
        </select>
      </div>
    </BaseNode>
  );
}; 