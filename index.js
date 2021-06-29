const http = require('http');
const port = 4000;

const fs = require('fs');

function requestHandler(req, res){
    console.log(req.url);
    res.writeHead(200);

    fs.readFile('./resumeContent.html', function(err, data){
        if(err){
            console.log("Error was found!");
            return res.end("<h1>Oh SNAP! We are on it.</h1>")
        }
        return res.end(data);
    });
}

const server = http.createServer(requestHandler);
server.listen(port, function(err){
    if(err){
        return console.log("error");
    }
    console.log("Server is running on port", port);
});