import React from 'react';

import './register.css';
const Register = () => {
  return (
   <React.Fragment>
    <div className="outerbox">
        <div className="innerbox">
            <header className="signup-header">
                <h1>Sign Up</h1>
            </header>

            <div className="signup-body">
                <form action="#">
                    <p>
                        <label for="username">UserName</label>
                        <input type="text" id="username" />
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="email" id="email" />
                    </p>
                    <p>
                        <label for="password">Password</label>
                        <input type="password" id="password" placeholder="Atleast 8 characters" />
                    </p>
                    <p>
                        <label for="cpassword">Confirm Password</label>
                        <input type="cpassword" id="cpassword" />
                    </p>
                    <p>
                        <input type="submit" value="Create Account" id="submit" />
                    </p>    
                </form>

                <div className="signup-footer">
                    <p>
                        Already have an Account? <a href="#">login</a>
                    </p>
                </div>

            </div>
        </div>
    </div>
    </React.Fragment>
  )
}

export default Register
