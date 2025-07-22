const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTION");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  console.log(req.headers["user-agent"]);

  const studentData = [
    { name: "Ayush M", message: "Hello world" },
    { name: "Riya R", message: " Hii Ayush sorry for late reply" },
    { name: "Suhani M", message: "Javascript" }
  ];


  // GET Request
  if (req.method === "GET" && req.url === "/students") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(studentData));
  }

  // POST Request
  else if (req.method === "POST" && req.url === "/student") {
    let stringData = "";

    req.on("data", chunk => {
      stringData += chunk;
    });

    req.on("end", () => {
      const student = JSON.parse(stringData);
      console.log("Received Student:", student);

      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Student received", student }));
    });
  }

  // Fallback
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Hello world");
  }
});

// Change port here - replace 3000 with your desired port
server.listen(3000, () => {
  console.log("MY SERVER IS RUNNING ON PORT 3000");
});
