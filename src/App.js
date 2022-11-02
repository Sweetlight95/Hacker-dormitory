import React, { useState } from 'react';
import './App.css';
import ResidentsList from './Components/ResidentsList';
import Search from './Components/Search';
import 'h8k-components';
import Error from './Components/Error';

const title = "Tizeti";
function App() {
  
  const[residentList, setResidentList] = useState([])
  const [errorState, setErrorState] = useState(false)
  const [name, setName] = useState(false)
  const [msg, setMsg] = useState('')
  const chg=(msg_,error,checkName)=>{
    setErrorState(error)
    setMsg(msg_)
    setName(checkName)
  }
  return (
    <div className="App">
        <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-column justify-content-center align-items-center w-50 mx-auto">
        <Search setResidentList={setResidentList} residentList={residentList} chg={(msg,error,checkName)=>chg(msg,error,checkName)} /> 
        {errorState?
        <Error msg={msg}/> :
        <ResidentsList residentList={residentList} checkName={name}/>}
         
      </div>
    </div>
  );
} 

export default App;
