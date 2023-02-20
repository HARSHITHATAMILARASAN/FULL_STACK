import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Square from './Square';
import Triangle from './Triangle';
import Cube from './Cube';
import Cuboid from './Cuboid';
import Cylinder from './Cylinder';
import Sample from './Sample';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Sample/>
    </div>
    <h1>ANSWERS USING FUNCTIONS</h1>
    <Cube s="5"/><br/>
    <Cuboid l="5" b="10" h="2"/><br/>
    <Cylinder radius="5" height="10"/><br/>
    <Square side="15"/><br/>
    <Triangle base="5" height="5"/>
  </React.StrictMode>
);


reportWebVitals();
