import React from 'react';
import "./Login.css";
const Login = () => {
    return (
        <div>
            <div className="login-container">
                <div className="left">
                    <div className="left-img">
                        <p className='left-h'>Inspire teamwork
                            and stay connected</p>
                        <p className="left-p">
                            Workfreeli replaces the many apps today's teams rely
                            on with a single platform that combines chat, calls,
                            file and task management.
                        </p>
                    </div>
                </div>
                <div className="right">
                    <p className='right-h'>Hello! Welcome Back</p>
                    <p className='right-p'>Sign into your account here</p>
                    <div className="login-input">
                        <label className='login-label' htmlFor="">Your email</label>
                        <div className='login-input-field'>
                            <div className='login-input-inside'>
                                {/* <span className='login-icon'><FontAwesomeIcon className='login-icon-f' icon={faAt} /></span> */}
                                <input type="email" placeholder='youremail@gmail.com' className='login-ep' />
                            </div>

                        </div>
                    </div>
                    <div className="login-input">
                        <label className='login-label' htmlFor="">Your password</label>
                        <div className='login-input-field'>
                            <div className='login-input-inside'>
                                {/* <span className='login-icon'><FontAwesomeIcon className='login-icon-f' icon={faLock} /></span> */}
                                <input type="password" placeholder='*****' className='login-ep' />
                            </div>

                        </div>
                    </div>
                    <div className='remember-me'>
                        <div>
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1" className='pl-3'> Remember me</label>
                        </div>
                        <div>
                            <a href="s.com"> <p>Forgot password?</p> </a>
                        </div>
                    </div>
                    <div className='login-button'>
                        <p>Sign In</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;