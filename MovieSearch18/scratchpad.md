    function callNASAAPI() {
        //call NASA API the moment page loads. 
        setloadmessage(stringloading);
        let postObject = {
            termone : quoteContent
        }
        console.log(postObject);
        // axios.get(loadApodURI).then(
        //     (response) => {
        //         console.log(response.data);
        //         setPost(response.data);
        //         setloadmessage(stringloaded);
        //     }
        // );

        axios.post(MongoURI,
            postObject
        ).then(
            (response) => {
                console.log(response.data);
                setPost(response.data);
                setloadmessage(stringloaded);
            }
        )
    }