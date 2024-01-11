import React, { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import back from '../../asset/back.jpg';
import { Parallax } from 'react-parallax';

const SignUp = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState(null);

  const signUpContainerStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    width: '300px',
    textAlign: 'center',
    margin: '0 auto',
    marginTop: '90px',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    boxSizing: 'border-box',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#4caf50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  async function switchAuthModeHandler(e) {
    try {
      e.preventDefault();
      setError(null);

      // const validationData = {
      //   email: emailRef.current.value,
      //   password: passwordRef.current.value,
      //   returnSecureToken: true,
      // };

      const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBCp9SmXtoPzu8R_bbOvzDcC-OKymv_Ucs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: emailRef.current.value,
          password: passwordRef.current.value,
          returnSecureToken : true
        }), //we put string always in object form
      });
console.log(response, "res")
      if (!response.ok) {
        throw new Error('Sign-up failed');
      }

      const responseData = await response.json();

      alert('Account created successfully');
      navigate('/login');
    } catch (error) {
      setError(error.message || 'Sign-up failed');
    }
  }

  return (
    <>
      <Parallax bgImage={back} strength={800} style={{ height: '100vh' }}>
        <div style={signUpContainerStyle}>
          <h2>Sign Up</h2>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <input type="email" placeholder="Email" ref={emailRef} required style={inputStyle} />
          <input type="password" placeholder="Password" ref={passwordRef} required style={inputStyle} />
          <button type="button" onClick={switchAuthModeHandler} style={buttonStyle}>
            Create new account
          </button>
          <div>
            <NavLink to="/login" style={{ color: "white", paddingTop: "1rem" }}>
              Have an Account?
            </NavLink>
          </div>
        </div>
      </Parallax>
    </>
  );
};

export default SignUp;
