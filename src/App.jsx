import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'
import Navbar from './Components/NavBar'
import AllArticles from './Components/AllArticles'
import SingleArticle from './Components/SingleArticle'
import SignIn from './Components/SignIn'
import react, { createContext } from 'react'


export const Context = react.createContext()

function App() {


  return (
    <>
   <Header />
   <Navbar />
   <Routes>
    <Route path="/" element={<Home  />} />
    <Route path="/account" element={<SignIn />} />
    <Route path="/articles" element={<AllArticles />} />
    <Route path="/articles/:article_id" element={<SingleArticle />} />
    </Routes>
    </>
  )
}

export default App
