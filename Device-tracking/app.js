//express basic
const express = require("express");
const app = express();
app.use(express.static('public'));

//basic path
const path = require("path");

//importing http to create a server 
const http = require("http"); 

// import socketio ,create server useing http (createServer)
const socketio = require("socket.io");
const server = http.createServer(app);

// socketio connected to server 
const io = socketio(server);

// io.on 
io.on("connection", function(socket){
    socket.on("send-location",function (data){
        io.emit("recieve-location", {id: socket.id, ...data});
    });
    console.log("connected");
});

// app.set (ejs) 
app.set("view engine","ejs");
app.set(express.static(path.join(__dirname, "public")))

//basic express route 
app.get("/", function (req,res){
    res.render("index");
});

//port 
server.listen(3000);