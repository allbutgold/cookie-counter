import { useState, useEffect } from 'react'


const Counter = () => {
  const [count, setCount] = useState(0)
  const [clicks, setClicks] = useState(0)
  
  useEffect(() => {
    fetch('http://localhost:3000/api/v1/capacity')
    .then(res => res.json())
    .then(data => {
      setCount(data.prisoners)
      console.log(data)
    })
  }, []) 

  function addCount() {
    setClicks(clicks + 1)
    fetch('http://localhost:3000/api/v1/prisoners', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({prisoners: count + 1})
    })
    .then(res => res.json())
    .then(data => {
      setCount(data.prisoners)
      console.log(data)
    })
  }

  function resetCount() {
    setClicks(0)
    fetch('http://localhost:3000/api/v1/reset', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({prisoners: 0})
  })
  .then(res => res.json())
  .then(data => {
    setCount(data.prisoners)
    console.log(data)
  })
}


  return (
    <div>
      <button onClick={addCount}>
        add one cookie
      </button>
      <p>current prisoners {count}</p>
      <p>your prisoners {clicks}</p>
      <p>you made {clicks * 50} USD</p>
      <button onClick={resetCount}>sell all cookies</button>  
    </div>
    )
}

export default Counter

