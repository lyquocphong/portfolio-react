import React, { Component } from 'react';
import avatar from '../asset/image/Circle.png';

export class AboutPage extends Component {
  render() {
    return (
        <section className="about-section">
            <div className="wrapper">
                <div className="avatar-wrapper">
                    <img className="avatar" src={avatar} alt=""/>
                </div>
                
                <div className="main">
                    <div className="main-wrapper">
                            <div className="slogan">"Hello, is it me you're looking for?"</div>
                            <div className="info">Hi, my name is Phong Lee and a fullstack developer from Oulu, Finland. I currently working as Frontside Oy as PHP developer which where my main duty is tuning and optimizing our in-house E-commerce system. </div>
                    </div>                   
                </div>
            </div>
        </section>
    )
  }
}

export default AboutPage
