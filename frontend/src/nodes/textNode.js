// textNode.js

import { useState, useEffect, useRef } from 'react';
import BaseNode from './BaseNode';
import { sharedStyles } from '../styles/sharedStyles';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const textareaRef = useRef(null);

  // Function to detect variables in text
  const detectVariables = (text) => {
    const variableRegex = /{{([^}]+)}}/g;
    const matches = [...text.matchAll(variableRegex)];
    return matches.map(match => match[1].trim());
  };

  // Update variables when text changes
  useEffect(() => {
    const newVariables = detectVariables(currText);
    setVariables(newVariables);
  }, [currText]);

  // Adjust textarea height based on content
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [currText]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  const textareaStyle = {
    ...sharedStyles.node.input,
    minHeight: '60px',
    resize: 'vertical',
  };

  return (
    <BaseNode
      id={id}
      data={data}
      title="Text"
      inputs={variables}
      outputs={['output']}
    >
      <div>
        <textarea
          ref={textareaRef}
          value={currText}
          onChange={handleTextChange}
          style={textareaStyle}
          placeholder="Enter text with variables like {{variable}}"
        />
        {variables.length > 0 && (
          <div style={{ 
            marginTop: '8px', 
            fontSize: '12px', 
            color: 'var(--text)',
            opacity: 0.8 
          }}>
            Detected variables: {variables.join(', ')}
          </div>
        )}
      </div>
    </BaseNode>
  );
};
