import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import AuthContext from "../../store/AuthContext";
import { Parallax } from 'react-parallax';
import { z, object } from 'zod';
import back2 from '../../asset/back2.jpg';

const schema = object({
  email: z.string().email(),
  password: z.string().min(6),
  firstName: z.string().min(2),
  phoneNumber: z.string().refine((value) => /^\d{10}$/.test(value), {
    message: 'Invalid phone number format. Please enter 10 digits.',
  }),
});

const loginContainerStyle = {
  backgroundColor: 'transparent',
  borderRadius: '8px',
  boxShadow: '0 0 40px rgba(200, 40, 80, 0.7)',
  padding: '20px',
  width: '300px',
  textAlign: 'center',
  margin: '0 auto',
  marginBottom: '90px',
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

function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  async function switchAuthModeHandler(e) {
    try {
      e.preventDefault();
      schema.parse({ email, password, firstName, phoneNumber });
      const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBCp9SmXtoPzu8R_bbOvzDcC-OKymv_Ucs", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response) {
        throw new Error('Error with response');
      }
      const data = await response.json();
      authCtx.login(data.idToken,data.email); //unique key
      console.log(data);
      navigate("/home");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <Parallax bgImage={back2} strength={800}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div style={loginContainerStyle}>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            style={inputStyle}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            style={inputStyle}
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />
          <button onClick={switchAuthModeHandler} style={buttonStyle}>Login</button>
        </div>
      </div>
    </Parallax>
  );
}

export default LogIn;
