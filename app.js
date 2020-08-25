/***********Creating server using Express JS***************/
const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 80;

//EXPRESS SPECIFIC STUFF
app.use("/static", express.static("static")); //serving static files using Express
app.use(express.urlencoded({ extended: true })); //to get values from form the moment it is submitted

//PUG SPECIFIC STUFF
app.set("view engine", "pug"); //Set the template engine as pug
app.set("views", path.join(__dirname, "views")); //Set the views directory

//ENDPOINTS
app.get("/", (req, res) => {
  //   const h2 = { h2: "This is shubham" };
  //   res.render("index", h2);
  res.render("index");
});

app.post("/", (req, res) => {
  //console.log(req.body);
  name = req.body.name;
  age = req.body.age;
  gender = req.body.gender;
  address = req.body.address;
  more = req.body.more;

  let outputFile = `Name of the person : ${name}, ${age} years old, ${gender}, residing at ${address}. More about him/her: ${more}`;
  fs.writeFileSync("output.txt", outputFile);
  const msg = { msg: "Your form submitted successfully" };
  res.render("index", msg);
});

//Displaying content in web using Pug
// app.get("/demo", (req, res) => {
//   res.render("demo", { title: "Hey", message: "Hello there Shubham!" });
// });

// app.get("/", (req, res) => {
//   res.send("This is Homepage");
// });

// app.get("/about", (req, res) => {
//   res.send("This is About page");
// });

// app.get("/contact", (req, res) => {
//   res.send("This is Contact page");
// });

// app.get("/this", (req, res) => {
//   res.status(400).send("This page not found");
// });

//START THE SERVER
app.listen(port, () => {
  console.log(`Server running successfully on port ${port}`);
});

/*************************************************************************************************/
/***********Creating server using Node JS***************/
// const http = require("http");
// const fs = require("fs");

// const htmlFile = fs.readFileSync("index.html");

// const hostname = "127.0.0.1";
// const port = 80;

// const server = http.createServer((req, res) => {
//   console.log(req.url);
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/html");
//   res.end(htmlFile);
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
