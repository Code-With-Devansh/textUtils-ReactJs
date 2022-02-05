import React, {useState} from 'react';
// import { Link } from 'react-router-dom';
export default function Navbar(props) {
  const getNavColor = ()=>{
    let ret = "navbar navbar-expand-lg navbar-<MODE> bg-<MODE>";
    if (props.mode === 'dark'){
      return ret.replaceAll('<MODE>', 'light');
    }else{
      return ret.replaceAll('<MODE>', 'dark')
    }
  };
  return (<>
        {/* <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}> */}
        <nav className={getNavColor()}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">TextUtils</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.mode==='dark'?'dark':'light'}`}>
            <input className="form-check-input" type="checkbox" role="switch" id="DarkModeCheck" onClick={props.toggleMode}/>
            <label className="form-check-label" htmlFor="DarkModeCheck">Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  </>);
}
