import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import FormText from './components/formText';
// import MultTable from './components/multTable';
import TextEncryption from './components/textecrpty';
import Alert from './components/Alert';
// import  from 'react-dom'
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Link
// }from "react-router-dom"
function App() {
  const [mode,setMode] = useState('light')
  const [alert,setAlert] = useState(null)
  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  const toggleMode =()=>{
    if(mode=='light'){
      setMode('dark')
      document.body.style.backgroundColor='#07166e'
      document.body.style.Color='white '
      showAlert("Dark mode has been set","success")
    }
    else{
      setMode('light')
      
      document.body.style.backgroundColor='white'
      document.body.style.Color='black'
      
      showAlert("light mode has been set","success")
    }
  }
  return (
    <div className="blank">
      
    <Navbar title = "NTX" link = "linko" mode={mode} toggleMode={toggleMode} />
    {alert && <Alert alert={alert} />}
    <div className="container my-3">
    <FormText showAlert={showAlert} heading ="Enter the text to analyze below" mode={mode}></FormText>

    </div>
    
    <TextEncryption  mode={mode}/>
    
    {/* <button onClick={() => showAlert('This is a warning', 'warning')}>Show Alert</button> */}

      {/* Conditional rendering of the Alert component */}
    
    {/*  <Routes>
            <Route path="/about" element={<About/>}>
            </Route>
            <Route path="/" element={<FormText showAlert={showAlert} heading ="Enter the text to analyze below" mode={mode}></FormText>
}>
            </Route>
            
    </Routes> 
    </Router>      */}
    
    </div>
  );
}

export default App;
