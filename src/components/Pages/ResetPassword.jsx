import React from 'react';
import { Link } from 'react-router-dom'

export const ResetPassword = () => {

  return (
    <>

      <div className="min-vh-100 d-flex flex-row align-items-center">
        <div className="container">
          <div className="row justify-content-center p-3">

              <h1 className="display-3">Forgot <b>Password</b>?</h1>
              <h1 className="display-1 mb-5">Reset Now</h1>

              <div className="card-body"> 

                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">Email address</label>
                  <input type="email" className="login-input" id="emailAddress" placeholder="name@example.com"/>
                </div>
              
                <div className="mb-3">
                    <Link to="/login">
                      <button className="btn btn-light float-start">Go back to login</button>
                    </Link>
                    <button className="btn btn-dark float-end">Reset Password</button>
                </div>

              </div>

          </div>
        </div>
      </div>
    </>
  )
}