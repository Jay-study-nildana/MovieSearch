
import './App.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import NoMatch from "./components/NoMatch";

let someString = `Hello and Welcome`;
function App() {
  return (
    <div className="container text-center">
      <hr></hr>
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>    
  );
}

export default App;


-----

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


----
const About = () => (
    <div className="text-center hero my-5">
        <blockquote class="blockquote">
        <p>{simpleMessage}</p>
        </blockquote>
        <img src={localImage} className="img-fluid" alt="..."></img>
  </div>
);

export default About;


```
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^11.0.0",
    "@testing-library/user-event": "^11.0.0",
    "react": "^16.0.0",
    "react-dom": "^16.0.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4",
```

```

    import React from "react";
    import ReactDOM from "react-dom";
    import "./index.css";
    import App from "./App";

    ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
    );
```

```
import './App.css';
import FacebookLogin from 'react-facebook-login';
import { useState } from 'react';
import { useEffect } from 'react';
import fbconfig from './fbconfig.json';
import googleconfig from './googleconfig.json';


function App() {

  const [loggedin, setloggedin] = useState(false);
  const [userData,setuserData] = useState('')

  const responseFacebook = (response) => {  
    console.log(response);
    if(response.email.length >0)
    {
      console.log(`okay, got the email. that means logged in`);
      //loggedintrue = true;
      setloggedin(true);
      setuserData(response);

    }
    else
    {
      console.log(`login failed.`);
    }
  }  

  useEffect(() => {
    console.log(loggedin);
    console.log(userData);

  }, [loggedin,userData]);  

  function logOut() {
    setloggedin(false);
    console.log(`logOut`);
  }  

  return (
    <div className="App">
      <div className="text-center">
        <p>here, a simple demo of facebook login</p>
        <hr></hr>
        {!loggedin &&
          < FacebookLogin
          appId={fbconfig.appID}
          autoLoad={true}
          fields="name,email,picture"
          callback={responseFacebook}
          cssClass="my-facebook-button-class"
          icon="fa-facebook"
        />        }
        {
          loggedin &&         
          <div className="text-center">
            <button
            type="button"
            className="btn btn-primary"
            onClick={logOut}
            >
            logout
            </button>
            <hr></hr>            
            <h3>{userData.name}</h3>
            <p>{userData.email}</p>
            {/* <img src={userData.picture.data.url} className="img-fluid" alt="..."></img> */}
            </div>
        }
      </div>
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;

```
```
  <GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
```