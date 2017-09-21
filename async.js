window.onload = function() {

    var http = new XMLHttpRequest();

    http.onreadystatechange = function(){
        //console.log(http);
       if(http.readyState == 4 && http.status == 200){
            console.log(JSON.parse(http.response));
        }
    };
    
    //Sets up request for us; tells JS where to get the request from; and whether it is async or not
    http.open("GET", "data/tweets.json", true);
    http.send();
    //console.log(http);
}

/*
READY STATES

0 - request has not been initialized
1 - request has been setup
2 - request has been sent
3 - request is in process
4 - request is completed

*/ 