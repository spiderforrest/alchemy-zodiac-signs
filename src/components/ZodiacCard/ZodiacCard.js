import React from 'react';

function ZodiacCard(arg) {
  return (
    <div className="zodiac" id={arg.key}>
      <img className="zodiac" src={`${arg.name}.png`}></img>
      <h3 className="zodiac">{arg.symbol}</h3>
      <p className="zodiac">{arg.dates}</p>
    </div>
  );
}

export default ZodiacCard;
