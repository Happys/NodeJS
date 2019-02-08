var express = require('express');
var app = express();
app.use(express.static('public'));
app.use('/.well-known', express.static('.well-known'));

app.get('/', function (req, res) {
  res.send(
'<html>' +
'    <head>' +
'	<link rel="icon" href="icon.ico" sizes="128x128" type="image/jpeg">' +
'    </head>' + 
'    <body>' +
'	Hello World!' +
'    </body>' +
'</html>');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});