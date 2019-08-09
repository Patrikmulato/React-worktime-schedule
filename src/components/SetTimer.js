import React from 'react';
import ColorPicker from './ColorPicker';

const SetTimer = () => {
  return (
    <div className='card container'>
      <div className='row' style={{ marginTop: '20px', marginBottom: '20px' }}>
        <div className='col'>
          <h2>Set your own time</h2>
        </div>
        <div className='col'>
          <ColorPicker />
        </div>
      </div>

      <div class='row' style={{ marginBottom: '20px' }}>
        <div className='col'>
          <select>
            <option value='volvo' selected>
              Monday
            </option>
            <option value='saab'>Tuesday</option>
            <option value='vw'>Wednesday</option>
            <option value='audi'>Thursday</option>
            <option value='audi'>Friday</option>
            <option value='audi'>Saturday</option>
            <option value='audi'>Sunday</option>
          </select>
        </div>
        <div className='col'>
          <small style={{ marginRight: '20px' }}>From</small>
          <input
            type='time'
            id='appt'
            name='appt'
            min='08:00'
            max='20:00'
            required
          />
        </div>
        <div className='col'>
          <small style={{ marginRight: '20px' }}>To</small>
          <input
            type='time'
            id='appt'
            name='appt'
            min='08:00'
            max='20:00'
            required
          />
        </div>
      </div>
    </div>
  );
};

export default SetTimer;
