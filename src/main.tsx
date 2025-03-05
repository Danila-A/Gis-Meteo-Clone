import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';
import './styles/global.scss';
import { App } from './App.js';

createRoot(document.getElementById('root')!).render(
  <Provider store={ store }>
    <App />
  </Provider>,
);
