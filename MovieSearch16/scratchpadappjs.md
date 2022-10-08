import './App.css';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { useState } from 'react';
import { useEffect } from 'react';
import googleconfig from './googleconfig.json';
import fbconfig from './fbconfig.json';
import { gapi } from 'gapi-script';

//this is a place holder image, in case, I cannot get the image from facebook.
let sphinximage = `https://commons.wikimedia.org/wiki/File:Jardin_El_Capricho_Sfinxs_at_Plaza_de_los_Emperadores05_cropped.jpg`;

gapi.load('client:auth2', () => {
  gapi.client.init({
    clientId: googleconfig.appID,
    plugin_name: 'chat',
  });
});

function App() {

  const [loggedin, setloggedin] = useState(false);
  const [googleloggedin, setgoogleloggedin] = useState(false);
  const [fbloggedin, setfbloggedin] = useState(false);
  const [userData, setuserData] = useState('');
  const [userDataprofileObj, setuserDataprofileObj] = useState('');
  const [userDatatokenObj, setuserDatatokenObj] = useState('');
  const [image, setimage] = useState(sphinximage);

  const responseGoogle = (response) => {
    console.log(response);
    if (response.googleId.length > 0 && response.profileObj != 'undefined') {
      console.log(`okay, got the googleId. that means logged in`);
      //loggedintrue = true;
      setloggedin(true);
      setuserData(response);
      setuserDataprofileObj(response.profileObj);
      setuserDatatokenObj(response.tokenObj);

      if (response.profileObj.imageUrl != null) {
        setimage(response.profileObj.imageUrl);
      }

      console.log(userData);
      console.log(userDataprofileObj);
      console.log(userDatatokenObj);

      //show only google data.
      setgoogleloggedin(true);
      //dont show fb data. 
      setfbloggedin(false);

    }
    else {
      console.log(`login failed.`);
    }
  }

  const responseFacebook = (response) => {
    console.log(response);
    console.log(response.userID);
    if (response.email.length > 0) {
      console.log(`okay, got the email. that means logged in`);
      //loggedintrue = true;
      setloggedin(true);
      setuserData(response);
      if (response.picture.data.url != null) {
        setimage(response.picture.data.url);
      }

      //show only fb data.
      setfbloggedin(true);

      //dont show google data. 

      setgoogleloggedin(false);

    }
    else {
      console.log(`login failed.`);
    }
  }

  useEffect(() => {
    console.log(loggedin);
    console.log(userData);
    console.log(userDataprofileObj);
    console.log(userDatatokenObj);
    console.log(image);
    console.log(googleloggedin);
    console.log(fbloggedin);

  }, [loggedin, userData, userDataprofileObj, userDatatokenObj, image,
    googleloggedin, fbloggedin]);

  function logOut() {
    setloggedin(false);
    setfbloggedin(false);
    setgoogleloggedin(false);
    console.log(`logOut`);
  }

  return (
    <div className="App">
      {!loggedin &&
        <div>
          <GoogleLogin
            clientId={googleconfig.appID}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
          <hr></hr>
          < FacebookLogin
            appId={fbconfig.appID}
            autoLoad={true}
            fields="name,email,picture"
            callback={responseFacebook}
            cssClass="my-facebook-button-class"
            icon="fa-facebook"
          />
        </div>

      }
      {
        loggedin &&
        userData.profileObj != 'undefined' &&
        googleloggedin &&
        <div className="text-center">
          <p>You are logged in with Google</p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={logOut}
          >
            logout
          </button>
          <hr></hr>
          <h3>{userDataprofileObj.name}</h3>

          <p>{userDataprofileObj.email}</p>

          <p>{userData.googleId}</p>
          {/* <img src={userData.picture.data.url} className="img-fluid" alt="..."></img> */}
          <img src={image} className="img-fluid" alt="..."></img>
        </div>
      }
      {
        loggedin &&
        fbloggedin &&
        <div className="text-center">
          <p>You are logged in with Facebook</p>
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
          <img src={image} className="img-fluid" alt="..."></img>
        </div>
      }
    </div>
  );
}

export default App;
