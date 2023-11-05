import './App.css';
import React,{ useState } from 'react';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';
import Alert from './components/Alert';
import AboutUs from './components/AboutUs';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
//babel compiles the js code
function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert=(message)=>{
    setAlert(message);
    setTimeout(()=>{
      setAlert(null)
    },3000);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      showAlert("DarkMode Enabled");
      document.body.style.backgroundColor='#708090';
    }
    else{
      setMode('light');
      showAlert("LightMode Enabled");
      document.body.style.backgroundColor='white';
    }
  }

  return (
    <>
    <Router>
    <Navbar title="TextEx" search="Explore" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}></Alert>
    <div class='container'>
	  <Routes>
		<Route exact path='/Home' element={<Textbox heading="TextUtils"/>}/> 	
	  </Routes>
    <Routes>
		<Route exact path='/About' element={<AboutUs/>}/> 	
	  </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
