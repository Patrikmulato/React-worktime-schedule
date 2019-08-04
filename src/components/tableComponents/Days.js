import React from 'react';
import moment from 'moment';

let days = moment.weekdays();

const Days = () => {
  return (
    <thead>
      <tr>
        <th />
        {days.map((day, i) => (
          <th key={day}>
            <p className='date center'>
              {moment(new Date())
                .add(i, 'days')
                .format('MMM DD')}
            </p>
            <h6 className='long center'>
              {moment(new Date())
                .add(i, 'days')
                .format('dddd')}
            </h6>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default Days;
