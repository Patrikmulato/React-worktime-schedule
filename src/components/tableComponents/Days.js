import React from 'react';

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

const Days = () => {
  return (
    <thead>
      <tr>
        <th />
        {days.map(day => (
          <th>
            <h6 className='long center'>{day}</h6>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default Days;
