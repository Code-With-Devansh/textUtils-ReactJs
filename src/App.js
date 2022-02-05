import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import About from './components/About';
import Alert from './components/Alert';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App(){
  const [Mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = ()=>{
    if (Mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#e9ecef';
      showAlert('changed the theme to light mode', 'success');
    }else{
      setMode('light');
      document.body.style.backgroundColor = '#02183a';
      showAlert('changed the theme to dark mode', 'success');
  }
  }
  return (
    <>
    <Router>
      <Navbar mode={Mode} toggleMode = {toggleMode}/>
      <Alert alert={alert}/>
      <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextArea mode={Mode} showAlert = {showAlert}/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}
export default App;