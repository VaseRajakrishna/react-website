import React, { Component } from 'react';
import './Header.css';
class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark app-nav">
            <div className="container">

            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navb">
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="https://github.com/vaserajakrishna">COMPANY <span className="span-logo">LOGO</span></a>
            <button className="btn mobile-btn d-block d-sm-none"><span><i class="fas fa-comment-alt"></i></span></button>
          
         
           <div className="collapse navbar-collapse" id="navb">
              <ul className="navbar-nav mr-auto">
                
              </ul>
              <div>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="https://github.com/vaserajakrishna">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://github.com/vaserajakrishna">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://github.com/vaserajakrishna">Solutions</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://github.com/vaserajakrishna">Blog</a>
                </li>
                <li className="nav-item">
                  <a className="btn app-glb-btn app-nav-btn d-none d-sm-block" href="https://github.com/vaserajakrishna"><span className="hdr-icon"><i class="fas fa-comment-alt"></i></span>&nbsp;Get In Touch</a>
                </li>
              </ul>
              </div>
            </div>
            </div>
          </nav>
        )
    }
}
export default Navbar;
