import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/logo1.jpg'
import user_icon from '../../assets/user_icon.svg'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import email from '../../assets/email.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footer_logo} alt="" />
                    <p>I am a Python Full Stack Developer</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">@ 2005 Sakshi Bhor.</p>
                <div className='logos' >
                    <a href='https://linkedin.com/in/sakshi-bhor-40a55425a'>
                        <img src={linkedin} alt="" />
                    </a>
                    <a href='https://github.com/ErSakshiBhor'>
                        <img src={github} alt="" />
                    </a>
                    <a href='mailto:sakshibhor2005@gmail.com'>
                        <img src={email} alt="" />
                    </a>
                </div>

                <div className="footer-bottom-right"> <p>Connect With me</p> </div>
            </div>
        </div>
    )
}

export default Footer
