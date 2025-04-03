import React from 'react'

const ProgressBar = ({progress}) => {

  return (
        <div className='outer' style={{border:'1px solid black',borderRadius:"10px",overflow:'hidden',margin:"10px 0",color:progress<5?"black":"white"}}>
        <div className='inner' style={{backgroundColor:'greenyellow',padding:"2px",width:`${progress}%`}}>
            {progress}%
        </div>
       </div>
  )
}

export default ProgressBar
