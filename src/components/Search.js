import React, { useState } from "react";
import ExtractData from './ExtractData'

function Search({ repoName, ownerName }) {
  const [apiData, setApiData] = useState(); 
  const [extract,setExtract] = useState(false);

  function apiCall() {
    fetch(`https://api.github.com/repos/${ownerName}/${repoName}/issues`)
      .then((response) => response.json())
      .then((data) => {
        
        setApiData(data);
        setExtract(true);
      });
  }
  return (
    <div>
      <button onClick={apiCall}>Search</button>
      {extract ? <ExtractData apiData={apiData}/> : null}
    </div>
  );
}

export default Search;
