document.getElementById("button1").onclick = function(){
    var req = new XMLHttpRequest();
    req.open("POST", "http://httpbin.org/post", true); /*Currently sends to a site that simply sends the data back*/
    req.setRequestHeader('Content-Type', 'application/json');
    req.addEventListener('load',function()
    {
        if(req.status >= 200 && req.status < 400)
        {
            console.log(JSON.parse(req.responseText));
            var data =JSON.parse(req.responseText);
            /*document.getElementById("test").innerHTML =data.data;*/
            document.getElementById("test").innerHTML ="Your information has been successfully sent!"
        }
         else
             {
               console.log("Error in network request: " + req.statusText);    
             }
     });
    var tPOST =document.getElementById("POST").value;
    req.send(tPOST);
}