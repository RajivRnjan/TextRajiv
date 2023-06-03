
import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';



function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      showAlert('Dark Mode Enabled', 'success')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light Mode Enabled', 'success')

    }
  }

  const toggleModeSuccess = ()=>{
    if(mode === 'light' || 'red'){
      setMode('green')
      document.body.style.backgroundColor = 'green'
      showAlert('Success Mode Enabled', 'success')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light Mode Enabled', 'success')

    }
  }
  const toggleModeDanger = ()=>{
    if(mode === 'light'|| 'green'){
      setMode('red')
      document.body.style.backgroundColor = 'red'
      showAlert('Red Mode Enabled', 'success')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light Mode Enabled', 'success')

    }
  }
  
  


  return (   
    <>
    <Navbar title="TExtRajiv" mode={mode} toggleMode={toggleMode} toggleModeSuccess={toggleModeSuccess} toggleModeDanger={toggleModeDanger}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <TextForms showAlert={showAlert} heading="Enter the text to analyze." mode={mode} />
    </div>
        
    {/* <About/> */}
    
    
    </>
  );
}

export default App;
