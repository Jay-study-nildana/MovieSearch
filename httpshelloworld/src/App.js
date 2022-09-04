import './App.css';
import axios from "axios";

//enguerrand-blanchy-3oADW0Ptj8c-unsplash
import localImageDiamondMoon from "./images/enguerrand-blanchy-3oADW0Ptj8c-unsplash.jpg";
let string1 = `hope you are seeing https in your browser address bar`;
let apikeyfromnasa = `JjP84CKefxzmg2fyAvN4zWsRyAAqg1nzrXvHdtc6`;
let loadApodURI = `https://api.nasa.gov/planetary/apod?api_key=${apikeyfromnasa}`;

function App() {


  function callNASAAPI() {
    //call NASA API the moment page loads. 
    //setloadmessage(stringloading);
    axios.get(loadApodURI).then(
        (response) => {
            console.log(response.data);
            //setPost(response.data);
            //setloadmessage(stringloaded);
        }
    );
}  

  return (
    <div className="App">
      <div className="text-center hero my-5">
        {/* <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" /> */}
        <h1 className="mb-4">{string1}</h1>   
        <hr></hr>
        <button className="btn btn-primary" onClick={callNASAAPI}>call API</button>
        <hr></hr>
        <div className='container-fluid'>
          <img src={localImageDiamondMoon} className="img-fluid" alt="..."></img>  
        </div>
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
