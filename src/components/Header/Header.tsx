import React from 'react';
import Logo from '../../img/logo.svg'

interface IMode {
    mode: boolean
    setMode: (value: boolean) => void}

const Header = ({mode,setMode}:IMode) => {

    return (
        <div id="header">
            <div className="container">
                <div className="header">
              <div className="header-logo">
                  <img src={Logo} alt=""/>
                  <h3>Zone.</h3>
              </div>
                  <div className="header-teg">
                      <a href="#">Home</a>
                      <a href="#">About Us</a>
                      <a href="#">Service</a>
                      <a href="#">Pricing</a>
                      <a href="#">Blog</a>
                      <button onClick={() => setMode(!mode)}>Theme</button>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Header;