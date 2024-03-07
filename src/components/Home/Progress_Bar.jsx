import React from 'react';
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";

const Progress_Bar = ({name, credits}) => {


  return (
    <>
    <div className="progress-container" >
      <h4 className='primary-font' >{name}</h4>
      <p className='primary-font' >{credits}</p>
      <ProgressBar
        percent={(credits/96)*100}
        filledBackground="#6DFF85"
        unfilledBackground="#AFFFBC"
        width="269px"
      />

    </div>
        {/* <ProgressBar
        percent={75}
        filledBackground="#6DFF85"
        unfilledBackground="#AFFFBC"
      /> */}
    </>
  )
}

export default Progress_Bar;