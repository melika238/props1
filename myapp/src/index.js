import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ProductTable from './components/ProductTable';
import './style.css';

const products  = [{name:'t shirt homme',category:'clothes',price:"50"},{ name:"t shirt femme",category:'clothes',price:'30'},{name:"tv",category:'Electronics',name:'700'}];

ReactDOM.render(
  <React.StrictMode>
  <ProductTable products={products} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
