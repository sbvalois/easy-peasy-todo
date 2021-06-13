import React from 'react';
import ReactDOM from 'react-dom';
import { StoreProvider} from 'easy-peasy'
import store from './state/store'
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
      <StoreProvider store={store}>
          <App />
      </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
