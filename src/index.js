import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import store from './redux/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store.store}>
    <PersistGate loading={null} persistor={store.persistor}>
      <App />
    </PersistGate>
  </Provider>
);
