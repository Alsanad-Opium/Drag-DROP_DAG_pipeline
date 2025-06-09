// graphUtils.js

/**
 * Checks if a graph is acyclic using DFS
 * @param {Array} nodes - Array of node objects
 * @param {Array} edges - Array of edge objects
 * @returns {boolean} - True if the graph is acyclic, false otherwise
 */
export const isAcyclic = (nodes, edges) => {
  // Create adjacency list
  const graph = new Map();
  nodes.forEach(node => {
    graph.set(node.id, []);
  });

  // Build adjacency list from edges
  edges.forEach(edge => {
    const source = edge.source;
    const target = edge.target;
    if (!graph.has(source)) graph.set(source, []);
    graph.get(source).push(target);
  });

  // Track visited nodes and nodes in current DFS path
  const visited = new Set();
  const path = new Set();

  // DFS function to detect cycles
  const hasCycle = (nodeId) => {
    if (path.has(nodeId)) return true; // Cycle detected
    if (visited.has(nodeId)) return false; // Already checked this node

    visited.add(nodeId);
    path.add(nodeId);

    // Check all neighbors
    const neighbors = graph.get(nodeId) || [];
    for (const neighbor of neighbors) {
      if (hasCycle(neighbor)) return true;
    }

    path.delete(nodeId);
    return false;
  };

  // Check each node for cycles
  for (const nodeId of graph.keys()) {
    if (hasCycle(nodeId)) return false;
  }

  return true;
};

/**
 * Validates a graph connection
 * @param {Object} connection - The proposed connection
 * @param {Array} nodes - Current nodes
 * @param {Array} edges - Current edges
 * @returns {Object} - { isValid: boolean, message: string }
 */
export const validateConnection = (connection, nodes, edges) => {
  // Check if connection would create a cycle
  const tempEdges = [...edges, connection];
  if (!isAcyclic(nodes, tempEdges)) {
    return {
      isValid: false,
      message: "Cycles not allowed—this link would create a loop."
    };
  }

  return { isValid: true };
};

/**
 * Validates the entire graph
 * @param {Array} nodes - Current nodes
 * @param {Array} edges - Current edges
 * @returns {Object} - { isValid: boolean, message: string }
 */
export const validateGraph = (nodes, edges) => {
  if (!isAcyclic(nodes, edges)) {
    return {
      isValid: false,
      message: "Your graph contains a cycle. Please remove it before running."
    };
  }

  return { isValid: true };
}; 