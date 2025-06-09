import { useState } from 'react';
import BaseNode from './BaseNode';
import { sharedStyles } from '../styles/sharedStyles';

export const JoinNode = ({ id, data }) => {
  const [joinType, setJoinType] = useState(data?.joinType || '');
  const [leftField, setLeftField] = useState(data?.leftField || '');
  const [rightField, setRightField] = useState(data?.rightField || '');

  return (
    <BaseNode
      id={id}
      data={data}
      title="Join"
      inputs={['left', 'right']}
      outputs={['output']}
    >
      <div>
        <div style={sharedStyles.node.label}>Join Type:</div>
        <select 
          value={joinType} 
          onChange={(e) => setJoinType(e.target.value)}
          style={sharedStyles.node.select}
        >
          <option value="">Select join type</option>
          <option value="inner">Inner Join</option>
          <option value="left">Left Join</option>
          <option value="right">Right Join</option>
          <option value="outer">Outer Join</option>
        </select>
        <div style={{ ...sharedStyles.node.label, marginTop: '8px' }}>Left Field:</div>
        <input 
          type="text" 
          value={leftField} 
          onChange={(e) => setLeftField(e.target.value)}
          style={sharedStyles.node.input}
          placeholder="Left table field"
        />
        <div style={{ ...sharedStyles.node.label, marginTop: '8px' }}>Right Field:</div>
        <input 
          type="text" 
          value={rightField} 
          onChange={(e) => setRightField(e.target.value)}
          style={sharedStyles.node.input}
          placeholder="Right table field"
        />
      </div>
    </BaseNode>
  );
}; 