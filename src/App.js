import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './components/Pages/Home';
import NavBar from './components/Header/NavBar';
import LogIn from './components/Authentication/LogIn';
import SignUp from './components/Authentication/SignUp';
import AboutUs from './components/Pages/About';


function App() {

 

  return (
    <>
     <NavBar/>
     <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
    </Routes>
    
      <Footer/>
    </>
  );
}

export default App;
