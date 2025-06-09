# VectorShift Frontend Technical Assessment

This project is a node-based pipeline visualization system built with React and FastAPI. It allows users to create, connect, and validate data processing pipelines through an intuitive drag-and-drop interface.

## Features

### 1. Node System
- **Base Node Abstraction**
  - Created a reusable `BaseNode` component for consistent node styling and behavior
  - Implemented dynamic handle positioning for inputs and outputs
  - Added customizable styling and layout options

- **Node Types**
  - Input Node: For data input sources
  - Output Node: For data output destinations
  - LLM Node: For language model operations
  - Text Node: For text processing with variable support
  - Filter Node: For data filtering operations
  - Transform Node: For data transformation operations
  - Aggregate Node: For data aggregation operations
  - Join Node: For combining multiple data streams
  - Split Node: For splitting data streams

### 2. Styling System
- **Shared Styles**
  - Implemented a consistent design system
  - Added hover effects and transitions
  - Created professional and modern UI components
  - Responsive layout for different screen sizes

### 3. Text Node Features
- **Dynamic Sizing**
  - Text area automatically resizes based on content
  - Improved visibility for longer text inputs

- **Variable Detection**
  - Detects variables in format `{{ variable }}`
  - Automatically creates input handles for detected variables
  - Visual feedback for detected variables

### 4. Pipeline Validation
- **Backend Integration**
  - FastAPI backend for pipeline validation
  - DAG (Directed Acyclic Graph) checking
  - Node and edge counting
  - User-friendly validation results

### 5. Canvas Management
- **Clear Functionality**
  - Clear Nodes: Removes all nodes while keeping connections
  - Clear All: Removes both nodes and connections
  - Confirmation dialogs to prevent accidental clearing

## Technical Implementation

### Frontend
- React 18
- ReactFlow for node visualization
- Zustand for state management
- Modern styling with CSS-in-JS

### Backend
- FastAPI
- NetworkX for graph validation
- CORS support for local development

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- Python 3.7 or higher
- pip (Python package manager)

### Installation

1. Clone the repository
2. Install frontend dependencies:
```bash
cd frontend
npm install
```

3. Install backend dependencies:
```bash
cd backend
pip install -r requirements.txt
```

### Running the Application

1. Start the backend server:
```bash
cd backend
uvicorn main:app --reload
```

2. Start the frontend development server:
```bash
cd frontend
npm start
```

The application will be available at `http://localhost:3000`

## Usage

1. **Creating a Pipeline**
   - Drag nodes from the toolbar onto the canvas
   - Connect nodes by dragging from one handle to another
   - Configure node properties through the node interface

2. **Using the Text Node**
   - Enter text in the text area
   - Use `{{ variable }}` syntax to create variables
   - Connect other nodes to the created variable handles

3. **Validating the Pipeline**
   - Click the "Submit Pipeline" button
   - View validation results in the alert
   - Check if the pipeline is a valid DAG

4. **Managing the Canvas**
   - Use "Clear Nodes" to remove all nodes
   - Use "Clear All" to remove nodes and connections
   - Confirm actions in the dialog boxes

## Project Structure

```
frontend/
├── src/
│   ├── nodes/           # Node components
│   ├── styles/          # Shared styles
│   ├── store.js         # State management
│   ├── ui.js           # Main UI component
│   ├── toolbar.js      # Node toolbar
│   └── submit.js       # Pipeline submission
└── package.json

backend/
├── main.py             # FastAPI application
└── requirements.txt    # Python dependencies
```

## Future Improvements

1. **Node Features**
   - Add more node types
   - Implement node templates
   - Add node validation rules

2. **UI Enhancements**
   - Add dark mode support
   - Implement node search/filter
   - Add undo/redo functionality

3. **Pipeline Features**
   - Save/load pipeline configurations
   - Export pipeline as JSON
   - Add pipeline execution simulation

4. **Backend Features**
   - Add user authentication
   - Implement pipeline execution
   - Add data validation rules 