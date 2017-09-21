window.onload = function() {

    //CALLBACK is just a function which is provided as a parameter to other methods such as
    //forEach() and it is invoked at a certain point of time
    /*
    function callback(data){
        console.log(data);
    }

    var animals = ["dog","cat","bunny"];
    animals.forEach(callback);
    */

    //jquery method - ASYNC CALLBACK FUNCTION - Starts now, finishes later
    /*
    $.get("data/tweets.json", function(val){
        console.log(val);
    });
    console.log("test");
    */

    //ERROR HANDLING
    /*
    function handleError(jqXHR, textStatus, error){
        console.log(error);
    }

    function cbTweets(data){
        console.log(data);

        function cbFriends(data){
            console.log(data);

            $.ajax({
                type:"GET",
                url:"data/fruits.json",
                success: function(data){
                    console.log(data);
                },
                error:  handleError
            });
        }

        $.ajax({
            type:"GET",
            url:"data/friends.json",
            success: cbFriends,
            error:  handleError
        });
    }

    $.ajax({
        type:"GET",
        url:"data/tweets.json",
        success: cbTweets,
        error:  handleError
    });
    */

    //PROMISES - A promise is an object which represents an action hasn't finished yet and will be done later
    var promise = get("data/tweets.json");
    promise.then(function(tweets){
        console.log(tweets);
        return get("data/friends.json");
    }).then(function(friends){
        console.log(friends);
        return get("data/fruits.json");
    }).then(function(fruits){
        console.log(fruits);
    }).catch(function(err){
        console.log(err);
    })

    function get(url){
        //if browser supports Promise method then it will supoort onload methos and onerror method
        return new Promise(function(resolve, reject){
            var xhttp = new XMLHttpRequest();
            xhttp.open("GET", url, true);

            xhttp.onload = function(){
                if(xhttp.status == 200){
                    resolve(JSON.parse(xhttp.response));
                } else {
                    reject(xhttp.statusText);
                }
            };

            xhttp.onerror = function(){
                reject(xhttp.statusText);
            }
            xhttp.send();
        })
    }
}

