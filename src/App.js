import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Table from './components/Table';
import SetTimer from './components/SetTimer';
import './App.css';

function App() {
  // Props
  const [color, setColor] = useState('');
  const [fromTime, setFromTime] = useState('');
  const [toTime, setToTime] = useState('');
  const [day, setDay] = useState('');

  // Getting data functions
  const daySetter = (e) => {
    setDay(e.target.value)
  }

  const pickTime = () => {
    setFromTime(document.getElementById('from').value);
    setToTime(document.getElementById('to').value);
  };

  const pickColor = e => {
    setColor(e.target.style.backgroundColor);
  };

  return (
    <Fragment>
      <Header />
      <Table />
      <SetTimer pickColor={pickColor} pickTime={pickTime} daySetter={daySetter} />
    </Fragment>
  );
}

export default App;
