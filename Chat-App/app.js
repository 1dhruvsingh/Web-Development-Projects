const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const path = require("path");

const {Server} = require("socket.io");
const io = new Server(server);

io.on("connection", (socket) =>{
  console.log("new user connected", socket.id);
  socket.on("message", (message)=>{
    io.emit("message", message);
  });
});

app.use(express.static(path.resolve("./public")));

app.get("/", (req,res)=>{
    return res.sendFile("./public/index.html");
})

server.listen(3000);