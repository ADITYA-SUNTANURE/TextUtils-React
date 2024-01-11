import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode,setMode] = useState("light")

  const [alert,setAlert] = useState(null)

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
    type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
    
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      showAlert('Dark mode Enabled!','success')
      document.body.style.backgroundColor = '#000435';
      document.title = 'TextUtils - Dark Mode';

      setInterval(() => {
        document.title = 'Darker';
      }, 2000);

      setInterval(() => {
        document.title = 'Sexier';
      }, 1500);

    }
    else{
      setMode('light');
      showAlert('Light mode Enabled!','success')
      document.body.style.backgroundColor = 'white';
      document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <>
    <Router>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>

  <div className='container my-3' width='70'>
<Switch>
          <Route exact path="/about">
            <About />
          </Route>
  
          <Route path="">
          <TextForm heading='The Text Box' mode={mode} showAlert={showAlert}/>
          </Route>
        </Switch>
</div>
</Router>

</>
  );
}

export default App;
