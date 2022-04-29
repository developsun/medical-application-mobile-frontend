import React from 'react'
import { Link } from 'react-router-dom'


export const Register = () => {
  return (
    <>
      <div className="min-vh-100 d-flex flex-row align-items-center">
        <div className="container">
          <div className="row justify-content-center p-3">
            <div className="card p-0 shadow">
              
              <h1 className="card-header bg-success text-light">Register</h1>

              <div className="card-body"> 

                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="emailAddress" placeholder="name@example.com"/>
                </div>

                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                  <input type="email" className="form-control" id="fullName" placeholder="Your Name"/>
                </div>

                <div className="mb-3">
                  <label for="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="password"/>
                </div>

                <div className="mb-3">
                  <label for="password" className="form-label">Confirm Password</label>
                  <input type="password" className="form-control" id="confirmPassword" placeholder="confirm password"/>
                </div>

                <div className="mb-3">
                    <Link to="/login">
                      <button className="btn btn-light float-start">Go back to login</button>
                    </Link>
                    <button className="btn btn-success float-end">Register</button>
                </div>

              </div>
            
            </div>
          </div>
        </div>
      </div>
    </>
  )
}