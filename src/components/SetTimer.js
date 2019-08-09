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

      <div className='row' style={{ marginBottom: '20px' }}>
        <div className='col'>
          <select>
            <option value='Monday'>Monday</option>
            <option value='Tuesday'>Tuesday</option>
            <option value='Wednesday'>Wednesday</option>
            <option value='Thursday'>Thursday</option>
            <option value='Friday'>Friday</option>
            <option value='Saturday'>Saturday</option>
            <option value='Sunday'>Sunday</option>
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
