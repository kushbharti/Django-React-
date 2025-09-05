// import { useState } from 'react'
import './assets/css/style.css'
import Main from './components/Main'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Register from './components/Register'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'
import AuthProvider from './AuthProvider'
import Dashboard from './components/Dashboard/Dashboard'



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

      <AuthProvider>
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path ='/register' element={<Register />} />
            <Route path='/login' element={<Login/>}  />     
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>

    </>
  )
}

export default App
