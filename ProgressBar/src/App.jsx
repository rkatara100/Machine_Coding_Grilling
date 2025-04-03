import './App.css'
import ProgressBar from './ProgressBar.jsx';
function App() {
   const bars=[1,10,15,20,0,75,40];
  return (
    <>
       <h1>Progress Bar</h1>
       {
        bars.map((value)=>{
          return ( <ProgressBar key={value} progress={value}/>)
        })
       }
       
    </>
  )
}

export default App
