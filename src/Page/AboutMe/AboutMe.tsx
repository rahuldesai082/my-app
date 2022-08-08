import React, {FunctionComponent} from 'react';
import { useNavigate } from "react-router";
import { HOME } from '../../route';
import './AboutMe.css';
interface AboutMeProps {
    
}
 
const AboutMe: FunctionComponent<AboutMeProps> = () => {
    const navigate = useNavigate();
    return <div>
        <div className='aboutMe-header'>
            <div className='link' onClick={() => navigate(HOME)}>Back</div>
            <div className='divider'></div>
            <div className='title'>About me</div>
        </div>
        <div className='aboutMe-body'>
            <div>Rahul Desai</div>
            <div>Front-end Developer</div>
        </div>
        <div className='aboutMe-footer'>
            <div>
                <a href="tel:+917259998980">+91-7259998980</a>
            </div>
            <div className='divider'></div>
            <div><a href="mailto:rahuldesai082@gmail.com">rahuldesai082@gmail.com</a></div>
        </div>
    </div>;
}
 
export default AboutMe;