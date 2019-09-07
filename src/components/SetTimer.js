import React from 'react';
import ColorPicker from './ColorPicker';
import moment from 'moment';

let days = moment.weekdays();

const SetTimer = ({ pickColor, pickTime, daySetter }) => {
  return (
    <div className='card container'>
      <div className='row' style={{ marginTop: '20px', marginBottom: '20px' }}>
        <div className='col'>
          <h2>Set your own time</h2>
        </div>
        <div className='col'>
          <ColorPicker pickColor={pickColor} />
        </div>
      </div>

      <div className='row' style={{ marginBottom: '20px' }}>
        <div className='col'>
          <select onChange={daySetter} defaultValue="Monday">
            {days.map(day => (
              <option id='setDay' key={day} value={day}>{day}</option>
            ))}
          </select>
        </div>
        <div className='col'>
          <small style={{ marginRight: '20px' }}>From</small>
          <input
            type='time'
            id='from'
            name='from'
            min='08:00'
            max='20:00'
            required
          />
        </div>
        <div className='col'>
          <small style={{ marginRight: '20px' }}>To</small>
          <input
            type='time'
            id='to'
            name='to'
            min='08:00'
            max='20:00'
            required
          />
        </div>
        <div className='col'>
          <button type='submit' value='OK' onClick={pickTime}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetTimer;
