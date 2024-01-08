import { Button, Form, Nav } from "react-bootstrap";
import React, { useRef, useState } from "react";
import classes from "./SignUpPage.module.css";
import { NavLink, useHistory } from "react-router-dom";
import { BsEye, BsEyeSlash } from "react-icons/bs";


const SignUpPage = () => {
  const emailInpurRef = useRef();
  const passwordInputRef = useRef();
  const confirmpasswordInputRef = useRef();

  const history = useHistory();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  }; 

  const showConfirmPasswordHandler = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInpurRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const confirmpassword = confirmpasswordInputRef.current.value;

    if (enteredPassword !== confirmpassword) {
      alert("Password and confirm password must match");
    } else {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCBNqXOohJ5C1pTxxgYtTbpbxZc1ncW9fc",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => {
        if (res.ok) {
          console.log("Account created succesfullly");
          history.replace("/login");
          alert("Account created succesful");
        } else {
          return res.json().then((data) => {
            // console.log(data);
            let errorMessage = "Authentication failed!";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }

            alert(errorMessage);
          });
        }
      });
    }
    emailInpurRef.current.value = "";
    passwordInputRef.current.value = "";
    confirmpasswordInputRef.current.value = "";
  };
  return (
    <>
      <h5 className={classes.desclaimer}>
        Disclaimer: Using this website implies agreement to our terms, including eligibility, account security, and privacy policies
      </h5>
      <section className={classes.box}>
        <h1>SignUp</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3">
            <Form.Label style={{ color: "white" }}>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Email"
              required
              ref={emailInpurRef}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={{ color: "white" }}>Password</Form.Label>
            <div className="input-group">
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                ref={passwordInputRef}
              />
              <Button
                className="input-group-append"
                onClick={showPasswordHandler}
              >
                {showPassword ? <BsEyeSlash /> : <BsEye />}
              </Button>
            </div>
          </Form.Group>

          <Form.Group className="mb-3 ">
            <Form.Label style={{ color: "white" }}>Confirm Password</Form.Label>
            <div className="input-group">
              <Form.Control
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                ref={confirmpasswordInputRef}
                required
              />
              <Button
                className="input-group-append"
                onClick={showConfirmPasswordHandler}
              >
                {showConfirmPassword ? <BsEyeSlash /> : <BsEye />}
              </Button>
            </div>
            {/* <Form.Control
              type="password"
              placeholder="Confirm Password"
              required
              ref={confirmpasswordInputRef}
            /> */}
          </Form.Group>

          <div>
            <Button variant="success pl-2" type="submit">
              Create Account
            </Button>
          </div>
          <Nav>
            <NavLink
              to="/login"
              style={{ color: "white", paddingTop: "1rem" }}
            >
              Have an Account?
            </NavLink>
          </Nav>
        </Form>
      </section>
    </>
  );
};
export default SignUpPage;