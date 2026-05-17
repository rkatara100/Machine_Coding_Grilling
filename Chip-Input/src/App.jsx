
import { useState } from 'react'
import './App.css'

function App() {

   const [input,setInput]=useState("");
   const [chip,setChip]=useState([]);

   const handleKeyDown=(e)=>{
     if(e.key==="Enter" && input!="" ){
          setChip((prev)=>[...prev,input]);
          setInput("");
     }
   }

   const handleDelete=(idx)=>{
        const copyarr=[...chip];
        copyarr.splice(idx,1);
        setChip(copyarr);
   }

  return (
      <div className='container'>
       <h1>Chip Input </h1> 
        <input type="text" onChange={(e)=>setInput(e.target.value)} 
         value={input} onKeyDown={(e)=>handleKeyDown(e)}/>
         
         <div className='Chip-container'>

          {
             chip.map((item,idx)=>{
                 return( <div className='chip'>
                   {item} <button style={{color:"red"}} onClick={()=>handleDelete(idx)}>
                           X
                   </button>
                  </div>)
            })
          }
              
         </div>

      </div>
  )
}

export default App
