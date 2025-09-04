import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Count: {count}</h1>
      <h2>set Count: {setCount}</h2>
    </>
  )
}

export default App
