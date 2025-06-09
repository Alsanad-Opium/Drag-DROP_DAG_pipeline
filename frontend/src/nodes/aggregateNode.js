import { useState } from 'react';
import BaseNode from './BaseNode';
import { sharedStyles } from '../styles/sharedStyles';

export const AggregateNode = ({ id, data }) => {
  const [groupBy, setGroupBy] = useState(data?.groupBy || '');
  const [operation, setOperation] = useState(data?.operation || '');
  const [field, setField] = useState(data?.field || '');

  return (
    <BaseNode
      id={id}
      data={data}
      title="Aggregate"
      inputs={['input']}
      outputs={['output']}
    >
      <div>
        <div style={sharedStyles.node.label}>Group By:</div>
        <input 
          type="text" 
          value={groupBy} 
          onChange={(e) => setGroupBy(e.target.value)}
          style={sharedStyles.node.input}
          placeholder="Field to group by"
        />
        <div style={{ ...sharedStyles.node.label, marginTop: '8px' }}>Field:</div>
        <input 
          type="text" 
          value={field} 
          onChange={(e) => setField(e.target.value)}
          style={sharedStyles.node.input}
          placeholder="Field to aggregate"
        />
        <div style={{ ...sharedStyles.node.label, marginTop: '8px' }}>Operation:</div>
        <select 
          value={operation} 
          onChange={(e) => setOperation(e.target.value)}
          style={sharedStyles.node.select}
        >
          <option value="">Select operation</option>
          <option value="sum">Sum</option>
          <option value="average">Average</option>
          <option value="count">Count</option>
          <option value="min">Min</option>
          <option value="max">Max</option>
        </select>
      </div>
    </BaseNode>
  );
}; 