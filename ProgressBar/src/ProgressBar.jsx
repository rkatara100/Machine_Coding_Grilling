import React, { useEffect, useState } from 'react';
import './ProgressBar.css';

const ProgressBar = ({ progress }) => {

       const [animatedProgress, setanimatedProgress]=useState(0);

      useEffect(()=>{
            setTimeout(()=>{
              setanimatedProgress(progress)
            },300)

      },[progress])


  return (
    <div className="outer">
      <div
        className="inner"
        style={{
      //      width:`${animatedProgress}%`, Not smooth Performant way, It renders again after when paint the browser
          transform: `translateX(${animatedProgress - 100}%)`,
          color:animatedProgress<5?"black":"white"
        }}
      >
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
