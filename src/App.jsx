import React from 'react'
import Homes  from '../pages/Homes';
import Navbar from '../component/Navbar';
import Section1 from '../component/Section1';
import Section2 from '../component/Section2';
import Section3 from '../component/Section3';
import Section4 from '../component/Section4';
import Section5 from '../component/Section5';
import Section6 from '../component/Section6';
import Section7 from '../component/Section7';
import Section8 from '../component/Section8';
import Section9 from '../component/Section9';
import Section10 from '../component/Section10';
import Footer from '../component/Footer';
import Lunch from '../pages/Lunch'
import Lunch1 from '../component/Lunch1';
import Lunch2 from '../component/Lunch2';
import Lunch3 from '../component/Lunch3';
import Lunch4 from '../component/Lunch4';
import Lunch5 from '../component/Lunch5';
import Lunch6 from '../component/Lunch6';
import Lunch7 from '../component/Lunch7';
import Lunch8 from '../component/Lunch8';
import Lunch9 from '../component/Lunch9';
import Lunch10 from '../component/Lunch10';
import Footer1 from '../component/Footer1';
import Dinner from '../pages/Dinner';
import Dinner1 from '../component/Dinner1';
import Dinner2 from '../component/Dinner2';
import Dinner3 from '../component/Dinner3';
import Dinner4 from '../component/Dinner4';
import Dinner5 from '../component/Dinner5';
import Dinner6 from '../component/Dinner6';
import Dinner7 from '../component/Dinner7';
import Dinner8 from '../component/Dinner8';
import Dinner9 from '../component/Dinner9';
import Dinner10 from '../component/Dinner10';
import About from '../pages/About';
import About1 from '../component/About1';
import About2 from '../component/About2';
import About3 from '../component/About3';
import About4 from '../component/About4';
import About5 from '../component/About5';
import Contact from '../pages/Contact';
import Contact1 from '../component/Contact1';
import Contact2 from '../component/Contact2';
import Contact3 from '../component/Contact3';
import Chief from '../pages/Chief';
import Chief1 from '../component/Chief1';
import Chief2 from '../component/Chief2';
import Book from '../pages/Book';
import Book1 from '../component/Book1';
import Book2 from '../component/Book2';
import Book3 from '../component/Book3';
import Book4 from '../component/Book4';
import Latest from '../pages/Latest';
import Latest1 from '../component/Latest1';
import Latest2 from '../component/Latest2';
import Blog from '../pages/Blog';
import Blog1 from '../component/Blog1';
import Blog2 from '../component/Blog2';
import Blog3 from '../component/Blog3';
import Blog4 from '../component/Blog4';
import Gallery from '../pages/Gallery';
import Gallery1 from '../component/Gallery1';
import Gallery2 from '../component/Gallery2';
import FoodMenu from '../pages/FoodMenu';
import Food1 from '../component/Food1';
import FoodMenu1 from '../component/FoodMenu1';
import FoodMenu2 from '../component/FoodMenu2';
import FoodMenu3 from '../component/FoodMenu3';
import Shop from '../pages/Shop';
import Shop1 from '../component/Shop1';
import Shop2 from '../component/Shop2';
import Shop3 from '../component/Shop3';
import Shopage from '../pages/Shopage';
import Pages from '../component/pages';
import Pages2 from '../component/Pages2';
import Signup from '../pages/Signup';
import Login from "../pages/Login";
import Forgotten from '../pages/Forgotten';
import Resetpassword from '../pages/Resetpassword';



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homes/>} /> 
        <Route path="/navbar" element={< Navbar/>} />
        <Route path="/section1" element={< Section1/>} />
        <Route path="/section2" element={< Section2/>} />
        <Route path="/section3" element={< Section3/>} />
        <Route path="/section4" element={< Section4/>} />
        <Route path="/section5" element={< Section5/>} />
        <Route path="/section6" element={< Section6/>} />
          <Route path="/section7" element={< Section7/>} />
          <Route path="/section8" element={< Section8/>} />
          <Route path="/section9" element={< Section9/>} />
          <Route path="/section10" element={< Section10/>} />
          <Route path="/footer" element={< Footer/>} />
            <Route path="/lunch" element={<Lunch/>} />
             <Route path="/lunch1" element={<Lunch1/>} />  
             <Route path="/lunch2" element={<Lunch2/>} />
             <Route path="/lunch3" element={<Lunch3/>} />
              <Route path="/lunch4" element={<Lunch4/>} />
               <Route path="/lunch5" element={<Lunch5/>} />
               <Route path="/lunch6" element={<Lunch6/>} />
              <Route path="/lunch7" element={<Lunch7/>} />
              <Route path="/lunch8" element={<Lunch8/>} />
              <Route path="/lunch9" element={<Lunch9/>} />
              <Route path="/lunch10" element={<Lunch10/>} />
              <Route path="/Footer1" element={<Footer1/>} />
                <Route path="/Dinner" element={<Dinner/>} />
                  <Route path="/Dinner1" element={<Dinner1/>} />
                  <Route path="/Dinner2" element={<Dinner2/>} />
                  <Route path="/Dinner3" element={<Dinner3/>} />
                  <Route path="/Dinner4" element={<Dinner4/>} />
                  <Route path="/Dinner5" element={<Dinner5/>} />
                  <Route path="/Dinner6" element={<Dinner6/>} />
                  <Route path="/Dinner7" element={<Dinner7/>} />
                   <Route path="/Dinner8" element={<Dinner8/>} />
                     <Route path="/Dinner9" element={<Dinner9/>} />
                      <Route path="/Dinner10" element={<Dinner10/>} />
                       <Route path="/About" element={<About/>}/>
                       <Route path="/About1" element={<About1/>}/>
                       <Route path="/About2" element={<About2/>}/>
                       <Route path="/About3" element={<About3/>}/>
                          <Route path="/About4" element={<About4/>}/>
                          <Route path="/About5" element={<About5/>}/>
                            <Route path="/Contact" element={< Contact/>}/>
                             <Route path="/Contact1" element={< Contact1/>}/>
                             <Route path="/Contact2" element={< Contact2/>}/>
                             <Route path="/Contact3" element={< Contact3/>}/>
                             <Route path="/Chief" element={< Chief/>}/>
                             <Route path="/Chief1" element={< Chief1/>}/>
                             <Route path="/Chief2" element={< Chief2/>}/>
                             <Route path="/Book" element={< Book/>}/>
                              <Route path="/Book1" element={< Book1/>}/>
                               <Route path="/Book2" element={< Book2/>}/>
                               <Route path="/Book3" element={< Book3/>}/>
                                <Route path="/Book4" element={< Book4/>}/>
                                <Route path="/Book4" element={< Book4/>}/>
                                  <Route path="/Book4" element={< Book4/>}/>
                                    <Route path="/Latest" element={<Latest/>}/>
                                    <Route path="/Latest1" element={<Latest1/>}/>
                                     <Route path="/Latest2" element={<Latest2/>}/>
                                      <Route path="/Blog" element={<Blog/>}/>
                                       <Route path="/Blog1" element={<Blog1/>}/>
                                       <Route path="/Blog2" element={<Blog2/>}/>
                                        <Route path="/Blog3" element={<Blog3/>}/>
                                          <Route path="/Blog4" element={<Blog4/>}/>
                                          <Route path="/Gallery" element={<Gallery/>}/>
                                          <Route path="/Gallery1" element={<Gallery1/>}/>
                                          <Route path="/Gallery2" element={<Gallery2/>}/>
                                           <Route path="/FoodMenu" element={<FoodMenu/>}/>
                                              <Route path="/Food1" element={<Food1/>}/>
                                              <Route path="/FoodMenu" element={<FoodMenu/>}/>
                                              <Route path="/FoodMenu1" element={<FoodMenu1/>}/>
                                              <Route path="/FoodMenu2" element={<FoodMenu2/>}/>
                                              <Route path="/FoodMenu3" element={<FoodMenu3/>}/>
                                              <Route path="/Shop" element={<Shop/>}/>
                                              <Route path="/Shop1" element={<Shop1/>}/>
                                              <Route path="/Shop2" element={<Shop2/>}/>
                                               <Route path="/Shop3" element={<Shop3/>}/>
                                                <Route path="/Shopage" element={<Shopage/>}/>
                                                <Route path="/Pages" element={<Pages/>}/>
                                                <Route path="/Pages2" element={<Pages2/>}/>
                                                 <Route path="/Signup" element={<Signup/>}/>
                                                  <Route path="/Login" element={<Login/>}/>
                                                  <Route path="/Forgotten" element={<Forgotten/>}/>
                                                  <Route path="/Resetpassword" element={<Resetpassword />} />

      </Routes>
    </Router>
  )
}

export default App