import React from 'react';
import MyPic from './picture.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram, faGithub, faTwitter, faFacebook} from '@fortawesome/free-brands-svg-icons';


export default function Info() {
    return (
        <div>
            <img src={MyPic} alt="My Pic"/>
            <div className='ii'>
            <h2>Abdullah Anis Edhi</h2>
            <h3>Frontend/Backend</h3>
            <h4>Find me on</h4>
            </div>
            <div className='contact'>
                <a href="mailto:abdullaedhi17@gmil.com" target='_blank' className='email'>
                    <FontAwesomeIcon icon={faEnvelope} /> Email
                </a>
                <a href="https://www.linkedin.com/in/abdullah-edhi-3440bb2aa/" className='linked' target='_blank'>
                    <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                </a>
            </div>

            <div className='about'>
                 <div>
                    <h2>About</h2>
                    <p>BS Computer Science FAST National University of Computer and Engineering Sciences</p>
                    <h2>Interests</h2>
                    <p>Java, Python, C/C++, HTML, CSS, Tailwind CSS, JavaScript, NodeJS, React, Shell Scripts, Linux/Ubuntu Programming, 
                        Machine Learning Algorithms, SQL, Pandas.</p>
                 </div>
            </div>

            <div className='socials'>
                <a href=" " target='_blank'><FontAwesomeIcon icon = {faInstagram}/></a>
                <a href="https://github.com/abdullahedhiii" target='_blank'><FontAwesomeIcon icon = {faGithub}/></a>
                <a href=" " target='_blank'><FontAwesomeIcon icon = {faFacebook}/></a>
                <a href=" " target='_blank'><FontAwesomeIcon icon = {faTwitter}/></a>
            </div>
        </div>
    );
}

