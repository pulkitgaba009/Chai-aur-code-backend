require('dotenv').config() 
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const port = process.env.PORT || 3000 ;

app.get("/",(req,res)=>{
    res.send("App is working..")
})

// get a list of 5 jokes
app.get('/api/jokes',(req,res)=>{
const jokes = [
  {
    id: 1,
    title: "A joke",
    content: "This is a joke"
  },
  {
    id: 2,
    title: "Programming Joke",
    content: "Why do programmers prefer dark mode? Because light attracts bugs."
  },
  {
    id: 3,
    title: "Math Joke",
    content: "Why was the equal sign so humble? Because it realized it wasn’t less than or greater than anyone else."
  },
  {
    id: 4,
    title: "Dad Joke",
    content: "I only know 25 letters of the alphabet. I don’t know y."
  },
  {
    id: 5,
    title: "Tech Joke",
    content: "There are only 10 kinds of people in the world: those who understand binary and those who don’t."
  }
];
res.json(jokes);
})

app.listen(port,()=>{
    console.log(`App is working at port ${port}...`)
})