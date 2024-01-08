import React from 'react';
import { Parallax } from 'react-parallax';
import image1 from '../../asset/image1.jpg';

const parallaxContainerStyle = {
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const parallaxContentStyle = {
  textAlign: 'center',
  color: '#fff', 
};


function Home() {
  return (
    <>
      <Parallax
        bgImage={image1}
        strength={800}
        style={parallaxContainerStyle}
      >
        <div style={parallaxContentStyle}>
          <h1>nikita</h1>
        </div>
      </Parallax>
     
    </>
  );
}

export default Home;
