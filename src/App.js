import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Table from './components/Table';
import SetTimer from './components/SetTimer';
import './App.css';

function App() {
  const [color, setColor] = useState('');

  const pickColor = e => {
    setColor(e.target.style.backgroundColor);
  };

  return (
    <Fragment>
      <Header />
      <Table />
      <SetTimer color={color} pickColor={pickColor} />
    </Fragment>
  );
}

export default App;
