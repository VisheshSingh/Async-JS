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

    $.ajax({
        type:"GET",
        url:"data/tweets.json",
        success: function(data){
            console.log(data);

            $.ajax({
                type:"GET",
                url:"data/friends.json",
                success: function(data){
                    console.log(data);

                    $.ajax({
                        type:"GET",
                        url:"data/fruits.json",
                        success: function(data){
                            console.log(data);
                        },
                        error: function(jqXHR, textStatus, error){
                            
                        }
                    });
                },
                error: function(jqXHR, textStatus, error){
                    
                }
            });
        },
        error: function(jqXHR, textStatus, error){

        }
    });
}

