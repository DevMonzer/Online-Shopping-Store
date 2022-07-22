import React from "react";

import "./loader.styles.scss";

const Loader = () => {
  return (
    <>
      <div className="content">
        <div className="planet">
          <div className="ring"></div>
          <div className="cover-ring"></div>
          <div className="spots">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <p className="paragraph">loading</p>
      </div>
    </>
  );
};

export default Loader;
