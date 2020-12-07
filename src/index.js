import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import User from './UserComponent/User';
import Task from './TaskComponent/Task';
import City from './CityComponent/City';

//JSX
ReactDOM.render(
  <React.StrictMode>
    <Task taskNumber = '1'/>
    <App />
    <Task taskNumber = '2'/>
    <User />
    <Task taskNumber = '3'/>
    <City/>
  </React.StrictMode>,
  document.getElementById('root')
);

//NO JSX
// const helloElement = React.createElement('h1', {'className': 'App'},'Hello React!!');
// ReactDOM.render(
//   helloElement,
//   document.getElementById('root')
// );
