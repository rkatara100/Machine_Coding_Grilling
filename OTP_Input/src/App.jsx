import { useEffect, useState } from 'react'
import './App.css'
import { useRef } from 'react';
 

const OTP_DIGIT_COUNT=5;
function App() {

  const [arrInput, setArrInput] = useState(
    new Array(OTP_DIGIT_COUNT).fill('')
  );
   
  const refArr=useRef([]);

  useEffect(()=>{
     refArr.current[0]?.focus();
  },[])

  const changeHandler=(value,idx)=>{
       
     if(isNaN(value ))return;
     console.log(value);
     const newvalue=value.trim();

     const newArr=[...arrInput];
     newArr[idx]=newvalue.slice(-1);
     setArrInput(newArr);
     newvalue && refArr.current[idx+1]?.focus();
  }

  const handleKeyDown=(e,idx)=>{
    //  console.log(e);
    //  console.log(e.key);

       if (!e.target.value && e.key==="Backspace") {
        refArr.current[idx-1]?.focus();
       }
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
                 onKeyDown={(e)=>handleKeyDown(e,id)}
                 />
               )
          })
         }
       
        </div>
  )
}

export default App
