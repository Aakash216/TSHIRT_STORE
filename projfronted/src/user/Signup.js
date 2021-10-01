import React, { useState } from "react";
import  Base from "../core/Base";
import {Link} from "react-router-dom";
import { signup } from "../auth/helper"

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false
  });

  const { name, email, password, error, success } = values;

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };
  
  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password })
      .then(data => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: "",
            success: true
          });
        }
      })
      .catch(console.log("Error in signup"));
  };
  
   const signUpForm = () => {
       return (
        <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 offset-md-3 offset-sm-3 text-left mb-0 mt-0">
          <form>
            <div className="form-group">
              <label className="text-light">Name</label>
              <input className="form-control form-control-md" 
              onChange={handleChange("name")} 
              type="text" 
              placeholder="your name"
               value={name} 
               />
            </div>
            <div className="form-group">
              <label className="text-light">Email</label>
              <input className="form-control form-control-md"  
              onChange={handleChange("email")}  
              placeholder="ex@gmail.com"
              type="email" 
              value={email}
              />
            </div>

            <div className="form-group">
              <label className="text-light">Password</label>
              <input className="form-control form-control-md"  
              onChange={handleChange("password")} 
               type="password" 
               placeholder="your password"
               value={password}
               />
            </div>
            <button onClick={onSubmit}
            className="btn btn-success btn-block form-control form-control-md">Submit</button>
          </form>
        </div>
      </div>
    );
  };

  const successMessage = () => {
    return(
      <div className="row">
      <div className="col-md-6 offset-sm-3 text-left">
    <div className="alert alert-success"
      style={{display: success ? "" : "none"}}>
        New account was created successfully. Please <Link to="/signin">Login Here</Link>
    </div>
    </div>
    </div>
    );
  };

  const errorMessage = () => {
    return(
      <div className="row">
      <div className="col-md-6 offset-sm-3 text-left">
    <div className="alert alert-danger"
      style={{display: error ? "" : "none"}}>
      {error}
    </div>
    </div>
    </div>
    );
};

    return (
        <Base title= "Sign up page" description="A page for user to signup!">
        {successMessage()}
        {errorMessage()}
        {signUpForm()}
        </Base>
    )
}

export default Signup;