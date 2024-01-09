import React,{useContext}from 'react';
import Footer from './components/Footer/Footer';
import Home from './components/Pages/Home';


function App() {

 

  return (
    <>
     
     <Routes>
     
      
        <Route path="/home" element={<Home/>} />
    </Routes>
    
      <Footer/>
    </>
  );
}

export default App;
