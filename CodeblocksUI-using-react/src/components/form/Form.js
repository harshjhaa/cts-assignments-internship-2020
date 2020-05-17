import React from 'react';
import './Form.css'

const Form = () => {
    return (
        <div className="contents" >
            <form>
                <h5 style={{ 'text-align': 'left' }}>Get Started For Free</h5>
                <br />
                <div className="form-group ">
                    <h6 style={{ 'text-align': 'left' }}>Email</h6>
                    <input type="email" className="form-control" style={{ height: 50 }} />
                </div>
                <div className="form-group ">
                    <h6 style={{ 'text-align': 'left' }}>Password</h6>
                    <input type="password" className="form-control" style={{ height: 50 }} />
                </div>
                <button className="btn" type="submit">Start Coding Now</button>
                <br />
                <br />
                <small style={{ 'text-align': 'left' }} id="emailHelp" className="form-text text-muted">By signing up for Codecademy, you agree to
                            Codecademy's <span><a href="#">Terms of Service </a>&<a href="#"> Privacy Policy</a></span>.</small>
            </form>
            <br />

            <h6 style={{ 'text-align': 'left' }}>Or, use another account:</h6>

            <div className="image-btn">
                <a href="www.linkedin.com"><img src="./images/linkedin.png" style={{ height: 40 }} /></a>
                <a href="www.google.com"><img src="./images/google.png" style={{ height: 40 }} /></a>
                <a href="www.facebook.com"><img src="./images/facebook.png" style={{ height: 40 }} /></a>
                <a href="www.github.com"><img src="./images/github.jpg" style={{ height: 40 }} /></a>
            </div>
        </div>
    );
};

export default Form;