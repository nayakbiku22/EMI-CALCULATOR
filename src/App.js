import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [principal,setPrincipal]=useState(0)
  const [interest,setInterest]=useState(0)
  const [year,setYear]=useState(0)
  const [emi,setEmi]=useState(0)

  const handleChange=(e)=>{
     const id=e.target.id
     const value=e.target.value
     if(id==="principal"){
      setPrincipal(value)
     }else if(id==="interest"){
      setInterest(value)
     }else{
      setYear(value)
     }
  }
  //P x R x (1+R)^N / [(1+R)^N-1]
  const calculateEmi=()=>{
    const r=interest/12/100;
    const x=Math.pow((1+r),(year*12));
    const result=principal*r*(x)/(x-1);
    setEmi(Math.round(result))
  }
  useEffect(()=>{
    calculateEmi()
  },[principal,interest,year])
  return (
    <div className="App">
     <h2>EMI Calculator</h2>
     <div className='inputs'>
      <p>Principal:</p>
      <input 
      onChange={handleChange}
       id='principal' type="number" />

      <p>Interest/year:</p>
      <input
       onChange={handleChange}
        id='interest' type="number" />
     
      <p>Year:</p>
      <input 
       onChange={handleChange}
       id='year' type="number" />
     </div>
     <div className="output">
      <p>Your EMI is <span>{emi?emi:0}</span> </p>
     </div>
    </div>
  );
}

export default App;
