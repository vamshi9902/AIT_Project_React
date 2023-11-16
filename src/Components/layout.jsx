import { BrowserRouter, Routes, Route } from "react-router-dom";


import Gallery from "./gallery";
import Tours from "./Tours/tour";
import About from "./About/about";
import Home from "./Home/home";
import Header from "./header";
import Footer from "./footer";
import Login from "./login";
import Register from "./register";
import Tours1 from "./Tours/toursComponents/tours1";
import Tours2 from "./Tours/toursComponents/tours2";
import Tours3 from "./Tours/toursComponents/tours3";
import Tours4 from "./Tours/toursComponents/tours4";
import Tours5 from "./Tours/toursComponents/tours5";
import Tours6 from "./Tours/toursComponents/tours6";
import Tours7 from "./Tours/toursComponents/tours7";
import Tours8 from "./Tours/toursComponents/tours8";
import Tours9 from "./Tours/toursComponents/tours9";
import Tours10 from "./Tours/toursComponents/tours10";
import User from "./Tours/user";

const Layout = () => {
  return (
        <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/Home' element={<Home />} />
        <Route exact path='/About' element={<About />} />
        <Route exact path='/Tours' element={<Tours />} />
        <Route exact path='/Login' element={<Login />} />
        <Route exact path='/Register' element={<Register />} />
        <Route exact path='/Gallery' element={<Gallery />} />
        <Route exact path='/Tour1' element={<Tours1 />} />
        <Route exact path='/Tour2' element={<Tours2 />} />
        <Route exact path='/Tour3' element={<Tours3 />} />
        <Route exact path='/Tour4' element={<Tours4 />} />
        <Route exact path='/Tour5' element={<Tours5 />} />
        <Route exact path='/Tour6' element={<Tours6 />} />
        <Route exact path='/Tour7' element={<Tours7 />} />
        <Route exact path='/Tour8' element={<Tours8 />} />
        <Route exact path='/Tour9' element={<Tours9 />} />
        <Route exact path='/Tour10' element={<Tours10 />} />
        <Route exact path='/User' element={<User />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Layout;