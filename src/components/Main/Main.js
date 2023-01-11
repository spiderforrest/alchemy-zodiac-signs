import React from 'react';
import './Main.css';
import ZodiacCard from '../ZodiacCard/ZodiacCard.js';
import { zodiac } from '../../data.js';
import background from '../../background.png';

function Main() {
  return (
    <div className="Main" style={{ backgroundImage: `url(${background})` }}>
      {zodiac.map((item) => (
        <ZodiacCard key={item.id} name={item.name} dates={item.dates} symbol={item.symbol} />
      ))}
    </div>
  );
}

export default Main;
