// 실행시 node main.js
// 종료시 Ctrl키 + C키

var http = require('http');
var fs = require('fs');
var url = require('url'); // 쿼리 스트링 활용(이하 qs)

var app = http.createServer(function(request,response){
    var _url = request._url;
    var queryData = url.parse(request.url, true).query; // qs
    console.log(queryData.id);
    if(_url == '/'){
      _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
      // return response.writeHead(404);
      response.writeHead(404);
      response.end();
      return;
    }
    response.writeHead(200);
    // console.log(__dirname +' | '+ _url)
    // ↓ 사용자가 접근할 때마다 사용자가 필요로하는 파일을 만들고 이를 읽게한다
    // response.end(fs.readFileSync(__dirname + _url));
    // ↓ 위의 코드를 qs로 변환
    response.end(queryData.id);
});
app.listen(3000);