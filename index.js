const express = require('express');
const app = express();
const http = require('http').createServer(app);

app.use('/static', express.static('public'))

app.get('/', function(req, res){
    return res.status(200).sendFile(__dirname + '/index.html');
});

http.listen(3005, function(){
  console.log('listening on *:3005');
});