window.onload = function() {

    //CALLBACK is just a function which is provided as a parameter to other methods such as
    //forEach() and it is invoked at a certain point of time
    function callback(data){
        console.log(data);
    }

    var animals = ["dog","cat","bunny"];
    animals.forEach(callback);
}

