import React from 'react';

const ColorPicker = ({ pickColor }) => {
  return (
    <div>
      <span
        onClick={pickColor}
        className='dot'
        style={{ backgroundColor: '#FF4136' }}
      />
      <span
        onClick={pickColor}
        className='dot'
        style={{ backgroundColor: '#FFDC00' }}
      />
      <span
        onClick={pickColor}
        className='dot'
        style={{ backgroundColor: '#2ECC40' }}
      />
    </div>
  );
};

export default ColorPicker;
