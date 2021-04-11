import React, { useState } from "react";
import Search from "./Search";

function Input() {
  const [ownerName, setOwnerName] = useState();
  const [repoName, setRepoName] = useState();

  function handleOwnerName(e) {
    setOwnerName(e.target.value);
  }
  function handleRepoName(e) {
    setRepoName(e.target.value);
  }
  console.log(repoName);
  console.log(ownerName);
  return (
    <div>
      <input type="text" onChange={handleOwnerName} />
      <input type="text" onChange={handleRepoName} />
      <Search ownerName={ownerName} repoName={repoName} />
    </div>
  );
}

export default Input;
