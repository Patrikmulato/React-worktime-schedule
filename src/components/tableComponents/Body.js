import React, { Fragment } from 'react';
import moment from 'moment';


let days = moment.weekdays();

// Table
let rows = [];
for (let i = 8; i <= 20; i++) {
  let decider = 'am';
  if (i >= 12) decider = 'pm';
  let colorize = null
  if (i === 8) colorize = 'colorize';
  rows.push(
    <Fragment key={i}>
      <tr key={`${i}a`}>
        <td className='hour' rowSpan='2'>
          <span>
            {i} {decider}
          </span>
        </td>
        {Array(7).fill().map((_, i) => (
          <td
            key={moment(new Date())
              .add(i, 'days')
              .format('dddd')}
            className={colorize}
          />
        ))}
      </tr>
      <tr key={`${i}b`}>
        {Array(7).fill().map((_, i) => (
          <td
            key={moment(new Date())
              .add(i, 'days')
              .format('dddd')}
            className={colorize}
          />
        ))}
      </tr>
    </Fragment>
  );
}

const Body = () => {
  return <tbody>{rows}</tbody>;
};

export default Body;
