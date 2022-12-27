import React from 'react'
import './login.css';
const Login = () => {
  return (
    <div>
    <div className="outerbox">
        <div className="innerbox">
            
    <div className='loginbody'>

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
                        <input type="password" id="password"/>
                    </p>
                   
                    <p>
                        <input type="submit" value="login" id="submit" />
                    </p>    
                </form>
                </div>
                <div className="signup-footer">
                    <p>
                       Don't have an account?<a href="#">Sign up</a>
                    </p>
                </div>

            </div>
            </div>
    
    
   
    </div>
  )
}

export default Login
