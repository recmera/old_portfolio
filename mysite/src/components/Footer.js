import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <div className='footer-container'>


            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link  to='/' className='social-logo'>
                            <i class="fab fa-jedi-order"/>

                        </Link>
                    </div>
                    <small className='website-rights'> Copyright © 2020 Rickiwasho.github.com - Todos los derechos reservados</small>
                    <div className='social-icons'>
                        <Link className='social-icon-link facebook'
                        to='/'
                        target='_blank'
                        aria-label='Facebook'>
                            <i className='fab fa-facebook-f'></i>
                        </Link>
                        <Link className='social-icon-link instagram'
                        to='/'
                        target='_blank'
                        aria-label='Instagram'>
                            <i className='fab fa-instagram'></i>
                        </Link>
                        <Link className='social-icon-link twitter'
                        to='/'
                        target='_blank'
                        aria-label='Twitter'>
                            <i className='fab fa-twitter'></i>
                        </Link>
                        <Link className='social-icon-link linkedin'
                        to='/'
                        target='_blank'
                        aria-label='Linkedin'>
                            <i className='fab fa-linkedin'></i>
                        </Link>
                        
                    </div>
                </div>
            </section>

        </div>
    );
}
export default Footer;