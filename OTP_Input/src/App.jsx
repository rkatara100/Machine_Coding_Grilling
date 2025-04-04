import { useEffect, useState } from 'react'
import './App.css'
import { useRef } from 'react';
 

const OTP_DIGIT_COUNT=5;
function App() {

  const [arrInput, setArrInput] = useState(
    new Array(OTP_DIGIT_COUNT).fill()
  );
   
  const refArr=useRef([]);

  useEffect(()=>{
     refArr.current[0]?.focus();
  },[])

  const changeHandler=(value,idx)=>{
       
     if(isNaN(value ))return;
     console.log(value);

     const newArr=[...arrInput];
     newArr[idx]=value.slice(-1);
     setArrInput(newArr);

  }
  

  return (
      <div className='app'>
         <h1>Validate OTP</h1>
         {
          arrInput.map((input,id)=>{
               return (
                 <input className='otp-input' type='text'  
                 value={arrInput[id]} key={id} 
                 onChange={(e)=>changeHandler(e.target.value,id)}
                 ref={(input)=>(refArr.current[id]=input)}
                 />
               )
          })
         }
       
        </div>
  )
}

export default App
