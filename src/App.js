import React, { Fragment } from 'react';
import Header from './components/Header';
import Table from './components/Table';
import ColorPicker from './components/ColorPicker';
import './App.css';

function App() {
  return (
    <Fragment>
      <Header />
      <Table />
      <ColorPicker />
    </Fragment>
  );
}

export default App;
