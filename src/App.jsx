import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'
import Navbar from './Components/NavBar'
import AllArticles from './Components/AllArticles'


function App() {


  return (
    <>
   <Header />
   <Navbar />
   <Routes>
    <Route path="/" element={<Home  />} />
    <Route path="/articles" element={<AllArticles />} />
    </Routes>
    </>
  )
}

export default App
