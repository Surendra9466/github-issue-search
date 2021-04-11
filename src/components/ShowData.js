import React from "react";
import "./css/showData.css";
function ShowData({ title, number, user }) {
  return (
    <div>
      <div className="showData">
        <div className="innerData">
          <div className="row-1">
            <input type="checkbox" className="checkbox" />
            <p className="title">{title}</p>
          </div>
          <div className="row-2">
            <p className="number">#{number}</p>
            <p className="user">opened 'x' hours ago by {user}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowData;
