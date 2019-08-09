import React, { Fragment } from 'react';
import Header from './components/Header';
import Table from './components/Table';
import SetTimer from './components/SetTimer';
import './App.css';

function App() {
  return (
    <Fragment>
      <Header />
      <Table />
      <SetTimer />
    </Fragment>
  );
}

export default App;
