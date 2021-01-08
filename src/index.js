import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Inventory from './sotre/Inventory';
import {Item} from './sotre/item';
import { Provider } from 'mobx-react'

const inventory = new Inventory()
// const i = new Item("test1")
// const i2 = new Item("test1")
// const i3 = new Item("test2")

inventory.addItem("Shampo",10)
inventory.addItem("Shampo")
inventory.addItem("Soap")
inventory.addItem("Tomatos",20,3)

const stores = {inventory}

ReactDOM.render(
  <Provider {...stores}>
    <App />,
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
