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


   # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
