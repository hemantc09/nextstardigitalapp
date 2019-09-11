var express =  require("express");
var app = express();
var request = require("request");

//can create different ports, for different envs
// var port = 8080;

const http = require('http');
const port = process.env.PORT || 3000


//App logic 
app.set("view engine","ejs");
//set up the by default directory
app.use(express.static(__dirname + "/public"));
console.log(__dirname);

//results route
app.get("/results",function(req,res){

    //reqest API
    var url = "https://gist.githubusercontent.com/scottburton11/66a921c458f9500a773a6b0ac65006df/raw/629bfd6a3125e3428bd85a53231bd8018c407a65/Javascript%2520Working%2520With%2520Data%2520Challenge%2520data";
    console.log(url);

    request(url,function(error,response,body){
        console.log("response", response);
        if(!error && response.statusCode == 200){
            //parse the JSON
            var apiData = JSON.parse(body);
            //render the apiData pass object to results route
            res.render("results",{apiData:apiData});
        }
        else {
            console.log("no success!");
        }
    });
});

//listening on 8080 port
// app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.listen(port,() => {
  console.log(`Server running at port `+port);
});
