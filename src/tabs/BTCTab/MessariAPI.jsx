import React, { useEffect, useState } from 'react';

/*
 * Pulls data from Messari's API and displays it on website
 */
const MessariAPI = (props) => {
  const count = props.count;
  const [apiIsLoading, setApiIsLoading] = useState(true);
  const [price, setPrice] = useState("");
  const url = "https://data.messari.io/api/v1/assets/btc/metrics"; 
  
  useEffect(() => {
    setApiIsLoading(true);
    fetch(url)
      .then(r => r.json())
      .then (response => {
        console.log(response);
        setPrice(response.data.market_data.price_usd);
        setApiIsLoading(false);
      })
  }, [count]);

  return(    
    <>
      {!apiIsLoading && price !== "" ? (
        <div>{price}</div>
      ) : (
        <div> Loading... </div>
      )}
    </>
  );
}

export default MessariAPI;