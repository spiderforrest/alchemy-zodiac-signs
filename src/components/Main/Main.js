import React from 'react';
// import './Main.css';
import ZodiacCard from '../ZodiacCard/ZodiacCard.js';
import { zodiac } from '../../data.js';

function Main() {
  return (
    <div className="Main">
      {zodiac.map((item) => (
        <ZodiacCard key={item.id} name={item.name} dates={item.dates} symbol={item.symbol} />
      ))}
    </div>
  );
}

export default Main;
