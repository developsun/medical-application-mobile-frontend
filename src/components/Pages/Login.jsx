import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom'
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

import Alert from '@mui/material/Alert';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


export const Login = () => {
  const [usernameError, setUsernameError] = useState(false)
  const [showError, setShowError] = useState(false)
  const [errorMessage, setErrorMesssage] = useState("")
  const [backdropState, setBackdropState] = React.useState(false);

  const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
  };

  function validatePhoneNumber(input_str) {
    var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

    return re.test(input_str);
  }
  const usernameChanged = () =>{
    setUsernameError(false);
    setErrorMesssage("")
    setShowError(false)

  }
  const login = () =>{
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(validateEmail(username) || validatePhoneNumber(username)){
      setBackdropState(true);
      setTimeout(function() {
        window.location.href = '/#/'
      }, 2000);
    }else{
      setUsernameError(true);
      setErrorMesssage("Email Address / Phone number format is incorrect.")
      setShowError(true)
    }

  }

  return (
    <>
      <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={backdropState}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <div className="min-vh-100 d-flex flex-row align-items-center">


        <div className="container">
          <div className="row justify-content-center p-3">

              <div className="card-body">
                <h1 className="display-3"><b>Hello,</b></h1>
                <h1 className="display-1 mb-5">Welcome Back</h1>
                {showError==true &&
                  <Alert severity="error" className="mb-3">{errorMessage}</Alert>
                }
                <div className="mb-3">
                    <TextField error={usernameError} onChange={()=>usernameChanged()} id="username" className="login-input" label="Email Address / Phone Number"  variant="standard" />
                </div>

                <div className="mb-3">
                  <TextField  id="password" type="password" className="login-input" label="Password" variant="standard" />
                </div>
              
                <div className="mb-3">
                  <div className="row">
                    <div className="col-12">
                      <Link to="/reset_password">
                        <button className="btn float-start">Reset password</button>
                      </Link>
                      <Button className="float-end" onClick={()=>login()} variant="contained">LOGIN</Button>
                    </div>
                  </div>                    
                </div>
                <center>
                  Dont have an account?&nbsp;
                <Link to="/register" style={{"color":"gray"}}>
                  <b>Signup</b>
                </Link>&nbsp;
                 here.
                </center>
              
              </div>

          </div>
        </div>
      </div>
    </>
  )
}