import { useState } from 'react';
import BaseNode from './BaseNode';
import { sharedStyles } from '../styles/sharedStyles';

export const FilterNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || '');

  const handleConditionChange = (e) => {
    setCondition(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      data={data}
      title="Filter"
      inputs={['input']}
      outputs={['output']}
    >
      <div>
        <div style={sharedStyles.node.label}>
          Condition:
        </div>
        <input 
          type="text" 
          value={condition} 
          onChange={handleConditionChange}
          style={sharedStyles.node.input}
          placeholder="Enter filter condition"
        />
      </div>
    </BaseNode>
  );
}; 