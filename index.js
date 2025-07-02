const http = require("http");
const url = require("url");
 
const server = http.createServer((req, res) => {
  console.log(req);
  let userMachine = req.headers['user-agent'];
  const x = url.parse(req.url, true);
  const y = x.query;
 
  if (y?.name) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
   res.write(`invalid `);
    res.end();
    return;
  } else if (req.url === '/student') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const studentData = [
      {
        message: "hello world",
        name: "Ayush M",
      },
      {
        message: "hello world",
        name: "Riya R",
      },
    ];
    res.end(JSON.stringify(studentData));
    return;
  } else if (req.url === '/teacher') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const teacherData = [
      {
        subject: "programming",
        name: "Ayush M",
      },
      {
        subject: "hello world",
        name: "Suhani R",
      },
    ];
    res.end(JSON.stringify(teacherData));
    return;
  }
 
    res.writeHead(200, { 'Content-Type': 'text/plain' });
   res.write(`invalid detail`);
   res.end();
  });
 
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});