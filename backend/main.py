from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Dict
import networkx as nx

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def is_dag(nodes: List[Dict], edges: List[Dict]) -> bool:
    # Create a directed graph
    G = nx.DiGraph()
    
    # Add nodes
    for node in nodes:
        G.add_node(node['id'])
    
    # Add edges
    for edge in edges:
        G.add_edge(edge['source'], edge['target'])
    
    # Check if the graph is a DAG
    return nx.is_directed_acyclic_graph(G)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
async def parse_pipeline(nodes: List[Dict], edges: List[Dict]):
    # Count nodes and edges
    num_nodes = len(nodes)
    num_edges = len(edges)
    
    # Check if the pipeline is a DAG
    is_valid_dag = is_dag(nodes, edges)
    
    return {
        'num_nodes': num_nodes,
        'num_edges': num_edges,
        'is_dag': is_valid_dag
    }
