const http = require('http');
const fs = require('fs');
const url = require('url');
const server = new http.Server();
server.listen(4200, '127.0.0.1');
server.on('request', function(req, res) {

    const urlParsed = url.parse(req.url, true);

    if (urlParsed.pathname === '/img') {
        fs.readFile("img.jpg", function(err, data){
            if (err) {
                console.error(err.message);
            } else {
                let call = urlParsed.query.callback;
                eval(call);
                onUserData(JSON.stringify({"Id": 10, "Name": "Malory", "RegistrationDate": "2020-01-12" }));
                res.end(data);
            }
        });
    }

    if (urlParsed.pathname === '/otherimg') {
        fs.readFile("img.jpg", function (err, data){
            if(err){
                console.error(err.message);
            }else{
                res.end(data);
            }
        });
    }
    if (urlParsed.pathname === '/content'){
        fs.readFile("content.txt", {encoding: 'utf-8'}, function(err, data){
            if(err){
                console.error(err.message);
            }else{
                res.setHeader("Access-Control-Allow-Origin",
                    "http://localhost:3000");
                res.setHeader("Access-Control-Allow-Credentials", "true");
                res.setHeader("Access-Control-Allow-Headers","Origin, " +
                    "Content-Type, X-Auth-Token, Authorization");
                res.end(data);
            }
        });
    }
    else {
        let call = urlParsed.query.callback;
        eval(call);
        onUserData(JSON.stringify({"Id": 10, "Name": "Malory", "RegistrationDate": "2020-01-12" }));
    }
});