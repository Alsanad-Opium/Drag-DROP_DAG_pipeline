// submit.js

import { sharedStyles } from './styles/sharedStyles';

export const handleSubmit = async (nodes, edges) => {
  try {
    const response = await fetch('http://localhost:8000/pipelines/parse', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nodes, edges }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    
    // Create alert message
    const message = `
      Pipeline Analysis Results:
      - Number of Nodes: ${data.num_nodes}
      - Number of Edges: ${data.num_edges}
      - Is Valid DAG: ${data.is_dag ? 'Yes' : 'No'}
    `;

    // Create alert element
    const alertDiv = document.createElement('div');
    alertDiv.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 16px;
      border-radius: 4px;
      background-color: ${data.is_dag ? '#d4edda' : '#f8d7da'};
      color: ${data.is_dag ? '#155724' : '#721c24'};
      border: 1px solid ${data.is_dag ? '#c3e6cb' : '#f5c6cb'};
      z-index: 1000;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      white-space: pre-line;
    `;
    
    // Add close button
    const closeButton = document.createElement('button');
    closeButton.textContent = '×';
    closeButton.style.cssText = `
      position: absolute;
      top: 5px;
      right: 5px;
      background: none;
      border: none;
      font-size: 20px;
      cursor: pointer;
      color: inherit;
    `;
    closeButton.onclick = () => alertDiv.remove();
    
    alertDiv.appendChild(closeButton);
    alertDiv.appendChild(document.createTextNode(message));
    document.body.appendChild(alertDiv);

    // Auto-remove after 5 seconds
    setTimeout(() => {
      alertDiv.remove();
    }, 5000);

  } catch (error) {
    console.error('Error:', error);
    alert('Error submitting pipeline: ' + error.message);
  }
};
