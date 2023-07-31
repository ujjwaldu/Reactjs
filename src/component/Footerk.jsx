import React from 'react';
import linkdin from '../assets/linkdin.jpeg'
import facebook from '../assets/facebook.jpg'
import twitter from '../assets/twitter.jpg'
import instagram from '../assets/instagram.jpeg'


 const Footerk = () => {
    return (
        <div className='footer'>
            <div className='sb_footer section_padding'>
                <div className="sb_footer-links">
                    <div className='sb_footer-links-div'>
                        <h4>For Business</h4>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                        <a href="/healthplan">
                            <p>Health Plan</p>
                        </a>
                        <a href="/individual">
                            <p>Individual</p>
                        </a>
                    </div>
                    <div className='sb_footer-links-div'>
                        <h4>Resources</h4>
                        <a href="/resources">
                            <p>Resource Center</p>
                        </a>
                        <a href="/resources">
                            <p>Testimonials</p>
                        </a>
                        <a href="/resources">
                            <p>STV</p>
                        </a>
                    </div>
                    <div className='sb_footer-links-div'>
                        <h4>Partners</h4>
                        <a href="/employer">
                            <p>Swing Tech</p>
                        </a>
                    </div>
                    <div className='sb_footer-links-div'>
                        <h4>Company</h4>
                        <a href="/about">
                            <p>About</p>
                        </a>
                        <a href="/Press">
                            <p>Press</p>
                        </a>
                        <a href="/career">
                            <p>Career</p>
                        </a>
                        <a href="/contact">
                            <p>Contact</p>
                        </a>
                    </div>
                    <div className='sb_footer-links-div'>
                        <h4>Social Media</h4>
                        <div className="socialmedia">
                            <p><img src={facebook} alt="" /></p>
                            <p><img src={twitter} alt="" /></p>
                            <p><img src={linkdin} alt="" /></p>
                            <p><img src={instagram} alt="" /></p>
                        </div>
                    </div>
                </div>
                <hr /><hr />
                <div className="sb_footer-below">
                    <div className="sb_footer-copyright">
                        <p>
                            @{new Date().getFullYear()} CodeInn. All right reserved.
                        </p>
                    </div>
                    <div className="sb_footer-below-links">
                        <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                        <a href="/privacy"><div><p>Privacy</p></div></a>
                        <a href="/security"><div><p>Security</p></div></a>
                        <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
                    </div>
                </div>
            </div>

        </div>
    )
};
export {Footerk}