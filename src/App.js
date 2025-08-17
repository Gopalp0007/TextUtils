
// import  { useState } from 'react'
// import './App.css';
// import Navbar from './Component/Navbar';
// import TextForm from './Component/Textform';
// import Alert from './Component/Alert';


// import {
  
//   Routes,
//   Route,
  
// } from "react-router-dom";

function App() {
 const [mode, setMode] = useState("light");
 const [alert, setAlert] =useState(null)
 
 const  showAlert = (message, type)=>{setAlert({
  msg: message ,
  type: type
 })
 setTimeout(() => {
  setAlert(null)
 },2000);

 }

 const togMode = () => {
  if (mode === "light") {
    setMode ("dark");
    document.body.style.backgroundColor ="#042743";
    showAlert("Dark mode has been enabled", "success")
    document.title = 'Textutils - Dark Mode';
    
  }else{
    setMode ("light") ;
     document.body.style.backgroundColor ="white";
     showAlert("light mode has been enabled", "success");
     document.title = 'Textutils - Light Mode ';
     
  }
 }

  return (
    <>

    
    <Navbar title="TextUtils" mode={mode} togMode={togMode}/>
    <Alert alert={alert} />
    <div className='container my-3'>
      
      
       
      
      
       <TextForm  showAlert={showAlert} heading="Enter The Text To Analyze" mode={mode}/>
      

    </div>
    
    </>
  );
}

export default App;
