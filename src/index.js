import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Inventory from './sotre/Inventory';
import {Item} from './sotre/item';

const store = new Inventory()
// const i = new Item("test1")
// const i2 = new Item("test1")
// const i3 = new Item("test2")

store.addItem("Shampo",10)
store.addItem("Shampo")
store.addItem("Soap")
store.addItem("Tomatos",20,3)

ReactDOM.render(
    <App store={store}/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
