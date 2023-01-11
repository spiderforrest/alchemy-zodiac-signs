import React from 'react';

function ZodiacCard(arg) {
  return (
    <div className="zodiac">
      <h3 className="name">{arg.name.toUpperCase()}</h3>
      <img className="img" src={`./images/${arg.name}.png`}></img>
      <p className="date">{arg.dates}</p>
      <h4 className="symbol">{arg.symbol}</h4>
    </div>
  );
}

export default ZodiacCard;
