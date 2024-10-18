// define root for react
import ReactDOM from 'react-dom/client';
import App from './App';

const root = document.getElementById('root');

console.log(root);

// render react app
ReactDOM.createRoot(root).render(<App />);
