var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

function templateHTML(title, list, body, control){
  return `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      ${list}
      ${control}
      ${body}
    </body>
    </html>
  `;
}
function templateList(filelist){
  var list = '<ul>';
  var i = 0;
  while(i < filelist.length){
    list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
    i = i + 1;
  }
  list = list+'</ul>';
  return list;
}

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(request.url, true).query;
  var pathname = url.parse(_url, true).pathname;
  
  if(pathname === '/'){
    if(queryData.id === undefined){
      fs.readdir('./data', function(error, filelist){
        var title = 'welcome';
        var description = 'Hello, Node.js';
        var list = templateList(filelist);
        var template = templateHTML(title, list, 
          `<h2>${title}</h2>
          <p>${description}</p>`,
          `<a href="/create">create</a>`
        );
        response.writeHead(200);
        response.end(template);
      });
    } else {
      fs.readdir('./data', function(error, filelist){
        fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
          var title = queryData.id;
          var list = templateList(filelist);
          var template = templateHTML(title, list, 
            `<h2>${title}</h2>
            <p>${description}</p>`, 
            ` <a href="/create">create</a>
              <a href="/update?id=${title}">update</a>
              <form action="delete_process" method="post">
                <input type="hidden" name="id" value="${title}">
                <input type="submit" value="delete">
              </form>
            `
          );
          response.writeHead(200);
          response.end(template);
        });
      });
    }
  } else if(pathname === '/create'){
    fs.readdir('./data', function(error, filelist){
      var title = 'WEB - create';
      var list = templateList(filelist);
      var template = templateHTML(title, list, `
        <form action="/create_process" method="post">
          <p><input type="text" name="title" placeholder="title"></p>
          <p>
            <textarea name="description" placeholder="description"></textarea>
          </p>
          <p>
            <input type="submit">
          </p>
        </form>
      `, '');
      response.writeHead(200);
      response.end(template);
    });
  } else if(pathname === '/create_process'){
    var body = '';
    request.on('data', function(data){ // post가 긴 경우 data로 쪼개서 날림 이를 해결하기 위해 더해 줌
        body = body + data;
        // 데이터가 너무 긴 경우 접속을 끊어버림 (보안장치) 예제에서는 다루지 않음
        // if (body.length > 1e6)
        //   request.connection.destroy();
    });
    request.on('end', function(){ // 데이터가 조각조각 들어오다가 더이상 데이터가 없을 때 = 전송이 끝남
        var post = qs.parse(body);
        var title = post.title;
        var description = post.description;
        
        fs.writeFile(`data/${title}`, description, 'utf8', function(err){
          response.writeHead(302, {Location: `/?id=${title}`});
          response.end();
        });
    });
  } else if(pathname === '/update'){
    fs.readdir('./data', function(error, filelist){
      fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
        var title = queryData.id;
        var list = templateList(filelist);
        var template = templateHTML(title, list,
          `
          <form action="/update_process" method="post">
            <input type="hidden" name="id" value="${title}">
            <p><input type="text" name="title" placeholder="title" value="${title}"></p>
            <p>
              <textarea name="description" placeholder="description">${description}</textarea>
            </p>
            <p>
              <input type="submit">
            </p>
          </form>
          `,
          ` <a href="/create">create</a>
            <a href="/update?id=${title}">update</a>
            <form action="delete_process" method="post">
              <input type="hidden" name="id" value="${title}">
              <input type="submit" value="delete">
            </form>
          `
        );
        response.writeHead(200);
        response.end(template);
      });
    });
  } else if(pathname === '/update_process'){
    var body = '';
    request.on('data', function(data){
        body = body + data;
    });
    request.on('end', function(){
        var post = qs.parse(body);
        var id = post.id;
        var title = post.title;
        var description = post.description;
        /*fs.writeFile(`data/${title}`, description, 'utf8', function(err){
          response.writeHead(302, {Location: `/?id=${title}`});
          response.end();
        });*/
        fs.rename(`data/${id}`, `data/${title}`, function(error){
          fs.writeFile(`data/${title}`, description, 'utf8', function(err){
            response.writeHead(302, {Location: `/?id=${title}`});
            response.end();
          })
        });
    });
  } else if(pathname === '/delete_process'){
    var body = '';
    request.on('data', function(data){
        body = body + data;
    });
    request.on('end', function(){
        var post = qs.parse(body);
        var id = post.id;
        fs.unlink(`data/${id}`, function(error){
          response.writeHead(302, {Location: `/`});
          response.end();
        })
    });
  } else {
    response.writeHead(404);
    response.end('Not found');
  }
});
app.listen(3000);