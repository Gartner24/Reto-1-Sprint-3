import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouters from './routers/AppRouters';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/sass/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouters />
  </React.StrictMode>
);