//SearchandShowComponent.js


import axios from "axios";
import { useState, useEffect } from 'react';

import localAntEaterImage from "../images/enguerrand-blanchy-3oADW0Ptj8c-unsplash.jpg";
let string1 = `This is where you will get your Movie things.`;
let APIURIGetMovies = `http://localhost:8081/mongodb/returnsomemovies`;
let APIURIPOSTSearchMovie = `http://localhost:8081/mongodb/searchformovie`;
let stringclickButton = `click the button to load data`
let stringloading = `loading........`;
let stringloaded = `MOVIE DATA IS HERE FROM AXIOS`;


const SearchandShowComponent = () => {

    const [post, setPost] = useState(null);
    const [loadmessage,setloadmessage] = useState(stringclickButton);

    const [quoteContent, setquoteContent] = useState('');
    const [quoteContentMimic, setquoteContentMimic] = useState('');     
    
    function callMOVIEAPI()
    {
        console.log(`Searching for : ${quoteContent}`)
        // let postObject = 
        // {
        //     "termone" : "james bond"
        // }
        let postObject = 
        {
            "termone" : quoteContent
        }
        console.log(postObject);
        axios.post(APIURIPOSTSearchMovie,postObject).then(
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
    function MovieItem(props) {
    // console.log(props);
    const moviething = (
        <div>
            <h4>Movie ID : {props.movie._id}</h4>
            <br></br>
            {/* <p>plot : {props.movie.plot}</p> */}
            {/* <p>votes : {props.movie.imdb.votes}</p>
            <p>id : {props.movie.imdb.id}</p>
            <p>hello</p> */}
            <h5>IMDB Details</h5>
            {/* <p>Rating : {props.movie.imdb.rating}</p>
            <p>Votes : {props.movie.imdb.votes}</p>
            <p>ID : {props.movie.imdb.id}</p> */}
            <h4>Plot</h4>
            <p>{props.movie.plot}</p>
            <hr></hr>
        </div>
    );
    return moviething;
    }      

    useEffect(() => {

        console.log(quoteContent);
        setquoteContentMimic(quoteContent);
        console.log(quoteContentMimic);

        if(quoteContent.length === 0)
        {
            let someMessage = `You have not yet typed anything. Type something`;
            setquoteContentMimic(someMessage);
        }        
    }, [quoteContent,quoteContentMimic]);    

    const outputWhenNull = 
    (
        
        <div className="text-center hero my-5">
          <h5>This is the Search and Show Component - Beginning</h5>
        {/* <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" /> */}
        <h1 className="mb-4">{string1}</h1> 
        <h1 className="mb-4">{loadmessage}</h1>   
        <div className="text-center input-group mb-3">
            <div className="text-center hero my-5">
                <input
                    type="text"
                    className="form-control"
                    placeholder="enter anything you want"
                    onChange={e => setquoteContent(e.target.value)}
                    value={quoteContent}
                />
                <p>You are typing : {quoteContentMimic}</p>
            </div>
        </div>
        <button className="btn btn-primary" onClick={callMOVIEAPI}>call API</button>
        <img src={localAntEaterImage} className="img-fluid" alt="..."></img>
        <h5>This is the Search and Show Component - Ending.</h5>
        </div>
    );
    
    if(post == null)
    {
      return outputWhenNull;
    }    

    const outputNOTNull = (
        <div className="text-center hero my-5">
        {/* <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" /> */}
        <h5>This is the Search and Show Component - Beginning</h5>
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
      
        <h5>This is the Search and Show Component - Ending.</h5>
        </div> 
      )
      
      if(post!=null)
      {
        return outputNOTNull;
      }    

    const output = (
        <div>
            <h5>This is the Search and Show Component - Beginning</h5>

            <h5>This is the Search and Show Component - Ending.</h5>
        </div>
    )

    return output;
}

export default SearchandShowComponent;