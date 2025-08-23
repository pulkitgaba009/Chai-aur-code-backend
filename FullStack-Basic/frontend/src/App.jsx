import { useState } from "react"
import axios from "axios"
import { useEffect } from "react";

function App() {
  const [jokes,setJokes] = useState([]);

  useEffect(()=>{
    axios.get("/api/jokes")
    .then((res)=>{
      setJokes(res.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  })

  return (
    <>
      <h1>Chai and full stack</h1>
      <p>Jokes : {jokes.length}</p>

      {jokes.map((joke,index)=>(
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <h3>{joke.content}</h3>
        </div>
      ))}
    </>
  )
}

export default App
