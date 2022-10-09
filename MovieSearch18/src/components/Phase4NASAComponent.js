import axios from "axios";
import { useState, useEffect } from 'react';

import localAntEaterImage from "../images/enguerrand-blanchy-3oADW0Ptj8c-unsplash.jpg";
let string1 = `This is where you will get your NASA things.`;
let apikeyfromnasa = `JjP84CKefxzmg2fyAvN4zWsRyAAqg1nzrXvHdtc6`;
let loadApodURI = `https://api.nasa.gov/planetary/apod?api_key=${apikeyfromnasa}`;
let stringclickButton = `click the button to load data`
let stringloading = `loading........`;
let stringloaded = `NASA DATA IS HERE FROM AXIOS`;



//const APODWithAPI = ({ todobaz, isLoading, startLoadingApod }) => {
//export default connect(mapStateToProps, mapDispatchToProps)(APODWithAPI);

const Phase4NASAComponent = () => {


    const [post, setPost] = useState(null);
    const [loadmessage,setloadmessage] = useState(stringclickButton);  
  
    function callNASAAPI() {
      //call NASA API the moment page loads. 
      //setloadmessage(stringloading);
      axios.get(loadApodURI).then(
          (response) => {
              console.log(response.data);
              setPost(response.data);
              setloadmessage(stringloaded);
          }
      );
    }   
  
    function resetAPI() {
      setPost(null);
      setloadmessage(stringclickButton);
    }
  
    useEffect ( () => {
      console.log(`data has been updated`);
  },[]);   
  
  const outputWhenNull = 
  (
      
      <div className="text-center hero my-5">
        <h5>This is the new Phase 4 Component - Beginning</h5>
      {/* <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" /> */}
      <h1 className="mb-4">{string1}</h1> 
      <h1 className="mb-4">{loadmessage}</h1>   
      {/* <button className="btn btn-primary" onClick={callNASAAPI}>call API</button> */}
      <button className="btn btn-primary" onClick={callNASAAPI}>call API</button>
      <img src={localAntEaterImage} className="img-fluid" alt="..."></img>
      <h5>This is the new Phase 4 Component - Ending.</h5>
      </div>
  );
  
  if(post == null)
  {
    return outputWhenNull;
  }
  
  const outputNOTNull = (
    <div className="text-center hero my-5">
    {/* <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" /> */}
    <h1 className="mb-4">{string1}</h1> 
    <h1 className="mb-4">{stringloaded}</h1>   
    <button className="btn btn-primary" onClick={resetAPI}>reset API</button>
    <p>{post.copyright}</p>
    <p>{post.date}</p>
    <img src={post.hdurl} className="img-fluid" alt="..."></img>
    <hr></hr>
    <img src={localAntEaterImage} className="img-fluid" alt="..."></img>
  
  
    </div> 
  )
  
  if(post!=null)
  {
    return outputNOTNull;
  }
  
    const output = (
      <div>
        <h5>This is the new Phase 4 Component - Beginning</h5>
  
        <h5>This is the new Phase 4 Component - Ending.</h5>
      </div>
    )
  
    return output;
  }

export default Phase4NASAComponent;