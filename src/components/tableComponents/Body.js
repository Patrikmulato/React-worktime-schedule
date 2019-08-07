import React, { Fragment } from 'react';

// Table
let rows = [];
for (let i = 8; i <= 20; i++) {
  let decider = 'am';
  if (i >= 12) decider = 'pm';
  rows.push(
    <Fragment>
      <tr>
        <td className='hour' rowSpan='2'>
          <span>
            {i} {decider}
          </span>
        </td>
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
      </tr>
    </Fragment>
  );
}

const Body = () => {
  return <tbody>{rows}</tbody>;
};

export default Body;
