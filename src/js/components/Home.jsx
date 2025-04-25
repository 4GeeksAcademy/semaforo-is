import React, { useState } from 'react';

function Home() {
  const [color, setColor] = useState('red');

  return (
    <div className="traffic-light">
      <div
        className={`light red ${color === 'red' ? 'selected' : ''}`}
        onClick={() => setColor('red')}
      ></div>
      <div
        className={`light yellow ${color === 'yellow' ? 'selected' : ''}`}
        onClick={() => setColor('yellow')}
      ></div>
      <div
        className={`light green ${color === 'green' ? 'selected' : ''}`}
        onClick={() => setColor('green')}
      ></div>
    </div>
  );
}

export default Home;
