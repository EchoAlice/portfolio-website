import React, { useEffect, useState } from 'react';

const url = "https://data.messari.io/api/v1/assets/btc/metrics"; 

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
        setPrice(response.data.market_data.price_usd);
        price === "" || price === undefined ? (
        setApiFailedToLoad(true) 
        ) : ( 
          setApiFailedToLoad(false)
        );
        setApiIsLoading(false);
      })
  }, [count, price]);

  return(    
    <>
      {!apiIsLoading && !apiFailedToLoad && price !== "" ? (
        <div>{price}</div>
      ) : apiIsLoading && !apiFailedToLoad ? (
        <div> Loading... </div> 
      ) : ( 
       <div> Failed to load</div> 
      )}
    </>
  );
}

export default MessariAPI;
