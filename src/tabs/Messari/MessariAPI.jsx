import React, { useEffect, useState } from 'react';
/*
 * Pulls data from Messari's API and displays it on website
 */
const MessariAPI = (props) => {
  const whatUseEffectDependsOn = props.state
  const [apiIsLoading, setApiIsLoading] = useState(true);
  const url = "https://data.messari.io/api/v1/assets/btc/profile"; 
  
  // This is working.  Response returns the api object.
  // Now, figure out how to parse the object to display what I want 
  // to be displayed.
  useEffect(() => {
    setApiIsLoading(true);
    fetch(url)
      .then(r => r.json())
      .then (response => {
        console.log(response);
        setApiIsLoading(false);
      })
  }, [whatUseEffectDependsOn]);

  // If api is not loading, return compoinent, else return "loading"
  return(    
    <>
      {!apiIsLoading ? (
        <div>Messari api data here:</div>
        // <MessariAPI/>
      ) : (
        <div> Loading... </div>
      )}
    </>
  );
}

export default MessariAPI;