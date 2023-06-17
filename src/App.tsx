// import { useState } from 'react'
import Signup from "./pages/auth/signup"
import Signin from "./pages/auth/signin"
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <>
        <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/auth/signin" element={<Signin />} />
        </Routes>
      </>
    </Router>
  )
}

export default App