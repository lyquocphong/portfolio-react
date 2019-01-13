import React, { Component } from 'react';
import logo from '../asset/image/phonglee.png';
import classNames from 'classnames';

export class Navbar extends Component {

state = {
    show_mobile_menu: false
}

showMobileMenu = () => {
    this.setState(previous => ({ show_mobile_menu: !previous.show_mobile_menu }), () => console.log(this.state))
}

  render() {
    return (        
        <div className="navbar">
            <div className="topnav">
                <a href="#home" className="active"><img className="mobileMenuLogo" src={logo} alt="Logo"></img></a>
                
                <button href="#" className="hambugerIcon" onClick={this.showMobileMenu}>
                    <i className="fa fa-bars"></i>
                </button>
            </div>
          
          <div className={classNames('links',{show: this.state.show_mobile_menu})}>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
          </div>
        </div>
    )
  }
}

export default Navbar
