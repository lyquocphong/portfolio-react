import React, { Component } from 'react'
import downArrow from '../asset/image/arrowwhite.png';
import headingLogo from '../asset/image/phonglee.png';

export class LandingPage extends Component {
  render() {
    return (
        
      <section className="landing-section">
        <div className="terminal">
            
            {/*Terminal Menu*/}
            <div className="terminal-menu">                
                <i className="icofont-terminal"></i>
            </div>

            {/*Terminal Console*/}
            <div className="terminal-console">                
                <div className="terminal-console-wrapper">
                    <div className="heading-wrapper">
                        <div className="heading">
                            <img className="heading-logo swing animated" src={headingLogo} alt=""/>
                        </div>
                    </div>

                    <div className="branding-wrapper">                        
                        <div className="branding rollIn animated">
                            <span>A <span className="highlight">WEB DEVELOPER</span> FROM FINLAND</span>
                        </div>                        
                    </div>
                </div>
            </div>

            <div className="terminal-footer">
                    <img className="fadeInDown animated infinite down-arrow" src={downArrow} alt=""/>
            </div>
            
        </div>
      </section>
    )
  }
}

export default LandingPage;