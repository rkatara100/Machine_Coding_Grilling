import { useEffect, useState } from 'react';
import './App.css'


const Product=({image,title})=>{
    
  return (
      <div className='product-card'>
        <img src={image} alt='product-image' className='product-image'></img>
        <span>{title}</span>
        </div>
  )
}


const Page_Size=10;
function App() {
  
 
  const [data, setData] = useState([]);
  const [curentPage,setCurrentPage]=useState(0);

  const fetchData = async () => {
    const response = await fetch('https://dummyjson.com/products?limit=200');
    const json = await response.json();

    setData(json.products);
  }
  

  useEffect(()=>{
     fetchData();
  },[])

  const TotalPage=Math.ceil(data.length/Page_Size);
  const start=curentPage*Page_Size;
  const end=start+Page_Size;

  const gotoPrev=()=>{
      setCurrentPage((prev)=>prev-1);
      console.log(curentPage);
  }

  const gotoNext=()=>{
    setCurrentPage((prev)=>prev+1);
}

  const handleClick=(n)=>{
      setCurrentPage(n);
      console.log(n);
  }

  return !data.length?(<h1>No product found</h1>): (
    <div className='app'>
       <div className='pagination-container'>
       <button disabled={curentPage===0} onClick={()=>gotoPrev()}>◀️</button>
        {
              
               [...Array(20).keys()].map((page) => (
                 <button onClick={()=>handleClick(page)} className={`pagination-container-btn ${page === curentPage ? 'active' : ''}`}   key={page}>{page}</button> 
            ))
           
         }
          <button disabled={curentPage===TotalPage-1} onClick={()=>gotoNext()}>▶️</button>
        </div>
      <div className='product-container'>
      {data.slice(start,end).map((item) => {
        const trimmedTitle = item.title.split(' ').slice(0, 2);
        return (
           <Product key={item.id} image={item.thumbnail}  title={trimmedTitle} />
        );
      })}
      </div>
    </div>
  );
}

export default App;
