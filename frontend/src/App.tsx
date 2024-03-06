import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './components/Landing/landing'
import Login from './components/Login/login'
import Signup from './components/Sign-up/signup'
import Hub from './components/Hub/hub'
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path='/hub' element={<Hub/>}/>
      </Routes>
  
    </BrowserRouter>

    </>
  )
}

export default App
