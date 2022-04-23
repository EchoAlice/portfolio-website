import React, { useEffect, useState } from 'react';

const url = "https://data.messari.io/api/v1/assets/btc/metrics"; 

const getBitcoinStats = (apiIsLoading, apiFailedToLoad, price) => {
  if (!apiIsLoading && !apiFailedToLoad && price !== "") {
    return <div>BTC Price USD: {price}</div>;
  }
  else if (apiIsLoading && !apiFailedToLoad) {
    return <div> Loading... </div>; 
  }
  else {
    return <div> Failed to load</div>; 
  }
}

/*
 * Pulls data from Messari's API and displays it on website
 */
const MessariAPI = (props) => {
  const count = props.count;
  const [apiIsLoading, setApiIsLoading] = useState(true);
  const [apiFailedToLoad, setApiFailedToLoad] = useState(false);
  const [price, setPrice] = useState("");
 
  useEffect(() => {
    setApiIsLoading(true);
    fetch(url)
      .then(r => r.json())
      .then (response => {
        console.log(response);
        setPrice(parseFloat(response.data.market_data.price_usd).toFixed(2));
        setApiIsLoading(false);
      }).catch((error) => {
        console.error(error);
        setApiFailedToLoad(true);
      });
  }, [count]);

  return(    
    <>
      { getBitcoinStats(apiIsLoading, apiFailedToLoad, price) }
    </>
  );
}

export default MessariAPI;
