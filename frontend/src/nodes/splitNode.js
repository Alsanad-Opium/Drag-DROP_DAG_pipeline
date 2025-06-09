import { useState } from 'react';
import BaseNode from './BaseNode';
import { sharedStyles } from '../styles/sharedStyles';

export const SplitNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || '');
  const [splitType, setSplitType] = useState(data?.splitType || '');

  return (
    <BaseNode
      id={id}
      data={data}
      title="Split"
      inputs={['input']}
      outputs={['true', 'false']}
    >
      <div>
        <div style={sharedStyles.node.label}>Split Type:</div>
        <select 
          value={splitType} 
          onChange={(e) => setSplitType(e.target.value)}
          style={sharedStyles.node.select}
        >
          <option value="">Select split type</option>
          <option value="condition">Condition</option>
          <option value="percentage">Percentage</option>
          <option value="random">Random</option>
        </select>
        {splitType === 'condition' && (
          <>
            <div style={{ ...sharedStyles.node.label, marginTop: '8px' }}>Condition:</div>
            <input 
              type="text" 
              value={condition} 
              onChange={(e) => setCondition(e.target.value)}
              style={sharedStyles.node.input}
              placeholder="Enter split condition"
            />
          </>
        )}
      </div>
    </BaseNode>
  );
}; 