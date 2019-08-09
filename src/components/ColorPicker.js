import React, { useState } from 'react';

const ColorPicker = () => {
  const [color, setColor] = useState('');

  const pickColor = () => {
    console.log(this);
    setColor(color);
  };
  return (
    <div>
      <span
        onClick={pickColor}
        className='dot'
        style={{ backgroundColor: '#FF4136' }}
      />
      <span className='dot' style={{ backgroundColor: '#FFDC00' }} />
      <span className='dot' style={{ backgroundColor: '#2ECC40' }} />
    </div>
  );
};

export default ColorPicker;
