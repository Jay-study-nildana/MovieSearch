//ShowReturningMoviesComponent.js

import axios from "axios";
import { useState, useEffect } from 'react';

import localAntEaterImage from "../images/enguerrand-blanchy-3oADW0Ptj8c-unsplash.jpg";
let string1 = `This is where you will get your Movie things.`;
let APIURIGetMovies = `http://localhost:8081/mongodb/returnsomemovies`;
let stringclickButton = `click the button to load data`
let stringloading = `loading........`;
let stringloaded = `MOVIE DATA IS HERE FROM AXIOS`;


const ShowReturningMoviesComponent = () => {

    const [post, setPost] = useState(null);
    const [loadmessage,setloadmessage] = useState(stringclickButton);     

    const [quoteContent, setquoteContent] = useState('');
    const [quoteContentMimic, setquoteContentMimic] = useState('');    

    function callMOVIEAPI()
    {
        axios.get(APIURIGetMovies).then(
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


    //   "title": "!Women Art Revolution",
    //   "imdb": {
    //       "rating": 6.7,
    //       "votes": 142,
    //       "id": 1699720
    //   }
      //props means properties. 
      function MovieItem(props) {
        // console.log(props);
        const moviething = (
            <div>
                <h4>Movie Title : {props.movie.title}</h4>
                <br></br>
                {/* <p>plot : {props.movie.plot}</p> */}
                {/* <p>votes : {props.movie.imdb.votes}</p>
                <p>id : {props.movie.imdb.id}</p>
                <p>hello</p> */}
                <h5>IMDB Details</h5>
                <p>Rating : {props.movie.imdb.rating}</p>
                <p>Votes : {props.movie.imdb.votes}</p>
                <p>ID : {props.movie.imdb.id}</p>
                <hr></hr>
            </div>
        );
        return moviething;
      }      

      const outputWhenNull = 
      (
          
          <div className="text-center hero my-5">
            <h5>This is the Show Movie Component Component - Beginning</h5>
          {/* <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" /> */}
            <h1 className="mb-4">{string1}</h1> 
            <h1 className="mb-4">{loadmessage}</h1>   
            {/* <div className="input-group mb-3">
              <div>
                  <input
                      type="text"
                      className="form-control"
                      placeholder="enter anything you want"
                      onChange={e => setquoteContent(e.target.value)}
                      value={quoteContent}
                  />
                  <p>You are typing : {quoteContentMimic}</p>
              </div>
            </div> */}
            <button className="btn btn-primary" onClick={callMOVIEAPI}>call API</button>
            <img src={localAntEaterImage} className="img-fluid" alt="..."></img>
            <h5>This is the Show Movie Component  Component - Ending.</h5>
          </div>
      );
      
      if(post == null)
      {
        return outputWhenNull;
      }      

      const outputNOTNull = (
        <div className="text-center hero my-5">
          <h5>This is the Show Movie Component Component - Beginning</h5>
        {/* <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" /> */}
        <h1 className="mb-4">{string1}</h1> 
        <h1 className="mb-4">{stringloaded}</h1>   
        <button className="btn btn-primary" onClick={resetAPI}>reset API</button>
        <h3>The number of movies is : {post.movies.length}</h3>
        {post.movies.map((singlemovieitem) =>
                    <MovieItem key={singlemovieitem.title} movie={singlemovieitem} />
                    // <h4>Movie ID : {singlemovieitem.plot}</h4>
                )
        }
        {/* <p>{post.date}</p> */}
        {/* <img src={post.hdurl} className="img-fluid" alt="..."></img> */}
        <hr></hr>
        {/* <img src={localAntEaterImage} className="img-fluid" alt="..."></img> */}
      
        <h5>This is the Show Movie Component  Component - Ending.</h5>
        </div> 
      )
      
      if(post!=null)
      {
        return outputNOTNull;
      }      

    const output = (
        <div>
            <h5>This is the Show Movie Component Component - Beginning</h5>

            <h5>This is the Show Movie Component  Component - Ending.</h5>
        </div>
    )

    return output;
}

export default ShowReturningMoviesComponent;