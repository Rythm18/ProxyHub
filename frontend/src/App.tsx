import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './components/Landing/landing'
import Login from './components/Login/login'
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
  
    </BrowserRouter>

    </>
  )
}

export default App
