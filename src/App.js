import React from 'react'
import Navbar from './components/Navbar'
import BasketProducts from './components/BasketProducts'

const App = () => {
  return (
    <div>
      <Navbar/>
      <h1 className=' text-center text-3xl font-medium mt-2 py-4'>Redux Store</h1>
      
      <BasketProducts/>
    </div>
  )
}

export default App