import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Shop from './components/Shop'
import Brilliant from './components/Brilliant'
import Drink from './components/Drink'
import Magzine from './components/Magzine'
import Footer from './components/Footer'
import NowTrending from './components/NowTrending'
import Login from './components/Login'
import Signup from './components/Signup'
import { Routes, Route } from "react-router-dom";
import Trending_buy from './components/Trending_buy'

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/buy/:index' element={<Trending_buy />} />
        <Route path='/' element={
          <>
            <Home />
            <Brilliant />
            <Shop />
            <NowTrending />

            <Drink />
            <Magzine />
          </>
        } />
      </Routes>
      <Footer />

    </div>
  )
}

export default App
