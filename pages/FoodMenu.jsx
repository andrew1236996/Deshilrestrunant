import React from 'react'
import Navbar from '../component/Navbar'
import Food1 from '../component/Food1'
import FoodMenu1 from '../component/FoodMenu1'
import FoodMenu2 from '../component/FoodMenu2'
import FoodMenu3 from '../component/FoodMenu3'
import Footer1 from '../component/Footer1'

const FoodMenu = () => {
  return (
    <div>
      <Navbar/>
      <Food1/>
      <FoodMenu1/>
      <FoodMenu2/>
      <FoodMenu3/>
      <Footer1/>
    </div>
  )
}

export default FoodMenu
