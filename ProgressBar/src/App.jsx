import './App.css'
import ProgressBar from './ProgressBar.jsx';
function App() {
   const bars=[10,100,2,15,20,0,75,40];
  return (
    <div className='app'> 
       <h1>Progress Bar</h1>
       {
        bars.map((value)=>{
          return ( <ProgressBar key={value} progress={value}/>)
        })
       }
       
    </div>
  )
}

export default App
