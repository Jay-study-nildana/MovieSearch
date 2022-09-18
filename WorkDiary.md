# Work Diary

This is a work diary of this project. 

# September 18th 2022

Ready to go to the next step. 

Next : 

1. Connect the 'search term' with the back end POST endpoint. 
1. get the results in the console log. 
1. Show the results in the component view

Get the host. 

http://localhost:8081/

this.server.get('/dummycar', (req, res) => {

http://localhost:8081/dummycar
this.server.get('/dummycarwithlodash', (req, res) => {

http://localhost:8081/dummycarwithlodash

this.server.post('/mongodb/searchformovie', (req, res) => {

http://localhost:8081/mongodb/searchformovie

termone: req.body.termone

{
    "termone" : ""
}

Phase Six Completed. 

Next : 

1. Router. Routing. Different links have different components.
1. local storage. Useful for storing user details.
1. FB login. 
1. Google login.
1. Put all this, in our movie project



# September 17th 2022

Ready to start Phase VI. 

Project has been cloned and everything is looking good. 

We can get the input box and POST search code from here 

https://github.com/Jay-study-nildana/FrontEndForStudents/blob/main/ReactJSForStudents/axioshelloworldhttps/src/components/PostSomethingMongo.js

https://developer.mozilla.org/en-US/docs/Web/Events

Okay, input box done. 

and button click is able to show the input gox 'search term'.

Next : 

1. Connect the 'search term' with the back end POST endpoint. 
1. get the results in the console log. 
1. Show the results in the component view

# September 11th 2022

Ready to start Phase V. 

Branch is 

https://github.com/Jay-study-nildana/MovieSearch/tree/PhaseFiveBeginsSeptember11th2022


Two references 

https://github.com/Jay-study-nildana/FrontEndForStudents/blob/main/ReactJSForStudents/axioshelloworldhttps/src/components/GetSomethingWithButton.js

https://github.com/Jay-study-nildana/FrontEndForStudents/blob/main/ReactJSForStudents/axioshelloworldhttps/src/components/PostSomethingMongo.js

Now, i have the movie count displaying. 

show the movie array in a list. 

```
                {post.movies.map((singlemovieitem) =>
                    <MovieItem key={singlemovieitem._id} movie={singlemovieitem} />
                )}
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

Okay, able to show a list of movies in react JS. 

Phase Five is complete. 

# September 10th. 

Phase Three : Completed. 

Phase Four : has begun. 

1. put the NASA output into a separate component in a separate file.  

using this as an example. 

https://github.com/Jay-study-nildana/FrontEndForStudents/blob/main/ReactJSForStudents/StarterNASAAPODReactJS/src/NASAAPOD/APODWithAPI.js

Moved NASA code to separate component. 

App.js now only has components and nothing else. 

That is Phase Four complete. 


# September 4th 2022

Started this project. 

GamePlan 

I want to get the API server. (our focus is React JS axios, so, right now we will just copy, the API server)
Note : later, we have to build the API server also. 

I got the API server from this link. 

https://github.com/Jay-study-nildana/NodeJSForStudents/tree/main/MongoDB_API_CRUD_HelloWorld

Next 

run the API server. 
test it with postman. 

1. dummycarwithlodash is working fine. 
1. returnsomemovieswithoutindexing 

we have a problem. dummycarwithlodash is working. 

but, movies is not working. 

Problem?

1. database is down. 
1. database connection is not good. 

IP address was the problem. 
added current IP address from mongo db dashboard. 

Now, 

1. run the API server. DONE.
1. test it with postman. DONE.

Next 

Build the React JS project. 

we have a simple hello world project.

https://github.com/Jay-study-nildana/FrontEndForStudents/tree/main/ReactJSForStudents/httpshelloworld

I have got it. 

simple hello world HTTPS is running. 

Now, basic things are ready. 

1. API Server is ready. 
1. Postman is ready. 
1. mongo db is ready.
1. basic react js is ready.

First Phase is complete. 

Phase Two

1. we need to make a simple ‘api call’ using axios.
1. we should show the information on the React JS web app using react component.

let's look at this button 

https://github.com/Jay-study-nildana/FrontEndForStudents/blob/main/ReactJSForStudents/axioshelloworldhttps/src/components/GetSomethingWithButton.js

first, we need to install axios. 

```
    npm install axios
```

first step 

1. we need to make a simple ‘api call’ using axios.

we are getting NASA API data. 

1. Show the NASA data on the web app. 
1. useEffect
1. useState. 


it's working. 

simple button, getting NASA data and showing NASA data. 

Phase Two is completed. 