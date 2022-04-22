import React, { useState } from 'react';
import MessariAPI from './MessariAPI';

/*
 * Displays BTC price and re-renders API when button is clicked
 */
const BitcoinPriceTab = () => {
  const [count, setCount] = useState(0);
  return(    
    <>
      <div>BTC Price USD: </div>
      <MessariAPI count={ count }/>
      <button onClick={() => setCount(count + 1)}>
        Update BTC Price
      </button>
    </>
  );
}

export default BitcoinPriceTab;
