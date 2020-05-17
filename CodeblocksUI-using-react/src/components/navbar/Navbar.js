import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav  className="navbar navbar-expand-lg navbar-light">
                <img className="navbar-brand" src="./images/codeblock-borderless-pic-3.PNG" />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Catalog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Learn From Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">For Business</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <button style={{ backgroundColor: '#ffffff' }} className="btn  my-sm-0" type="submit">Login</button>
                    </form>
                    <form className="form-inline my-2 my-lg-0">
                        <button style={{ backgroundColor: '#6400e4', color: '#ffffff', }} className="btn  my-sm-0" type="submit">Sign
                    up</button>
                    </form>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;