import { useEffect, useState } from 'react';
import './App.css'

function App() {
  
  const[showResults,setShowResults]=useState(false);
  const[input,setInput]=useState("");
   const [results,setResults]=useState([]);
  const [cache,setCache]=useState({});

  const fetchData=async()=>{
      
      if (cache[input]) {
        console.log("cached Result",input);
           setResults(cache[input]);
           return;
      }

      console.log("API",input);
      const data=await fetch('https://dummyjson.com/recipes/search?q='+input);
      const json=await data.json();
      setResults(json?.recipes);
      setCache((prev)=>({...prev,  [input]:json?.recipes}));

  };

  useEffect(()=>{
         const timer=setTimeout(fetchData,500);
         return()=>{
            clearTimeout(timer);
         };

  },[input])

  return (
    <>
       <div className='App'>
            <h1>AutoComplete Search Bar </h1>
              <div className='container'>
                <input type="text" className='search-input' value={input} 
                onChange={(e)=>setInput(e.target.value)}
                onFocus={()=>setShowResults(true)}
                onBlur={()=>setShowResults(false)}
                />
                { showResults && <div className='results-container'>
                    {
                      results.map((r)=>{
                      return(
                      <span className='result' key={r.id}>
                        {r.name}
                      </span>
                  ) })}
                </div>}
              </div>

       </div>
    </>
  )
}

export default App
