import React from "react";
import preloader from "../../../assets/images/loading.gif";

const Preloader = (props) => {
  return (
    <div style={{backgroundColor: 'white'}}>
      <img src={preloader} alt='Loading...' />
    </div>
  );
}

export default Preloader;