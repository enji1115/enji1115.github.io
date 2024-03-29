var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function (request, response) {
  var _url = request._url;
  var queryData = url.parse(request.url, true).query;
  var title = queryData.id;
  // ↓ ★[if(_url == '/'){]로만 되어있는데 안 먹혀서 [|| title == undefined]를 추가했습니다.
  if (_url == '/' || title == undefined) {
    title = 'Welcome';
  }
  if (_url == '/favicon.ico') {
    response.writeHead(404);
    response.end();
    return;
  }
  response.writeHead(200);
  fs.readFile(`data/${title}`, 'utf8', function(err, description){
    var template = `
      <!doctype html>
      <html>
      <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
      </head>
      <body>
        <h1><a href="/">WEB</a></h1>
        <ul>
          <li><a href="/?id=HTML">HTML</a></li>
          <li><a href="/?id=CSS">CSS</a></li>
          <li><a href="/?id=JavaScript">JavaScript</a></li>
        </ul>
        <h2>${title}</h2>
        <p>${description}</p>
      </body>
      </html>
      `;
    response.end(template);
  });
});
app.listen(3000);