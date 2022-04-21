import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className='box-footer'>
            <div className='row'>
                <div className='col-md-2'>
                    <h5>OttoService</h5>
                    <a href='#'><p>- About OttoService</p></a>
                    <a href='#'><p>- Careers</p></a>
                    <a href='#'><p>- Blog</p></a>
                    <a href='#'><p>- Ottos Partners</p></a>
                </div>
                <div className='col-md-2'>
                    <h5>Helpdesk</h5>
                    <a href='#'><p>- Call Center</p></a>
                    <a href='#'><p>- Email Us</p></a>
                    <a href='#'><p>- Complains</p></a>
                    <a href='#'><p>- FAQ</p></a>
                </div>
                <div className='col-md'>
                    <h5>Helpdesk</h5>
                    <a href='#'><p>- Call Center</p></a>
                    <a href='#'><p>- Email Us</p></a>
                    <a href='#'><p>- Complains</p></a>
                    <a href='#'><p>- FAQ</p></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;