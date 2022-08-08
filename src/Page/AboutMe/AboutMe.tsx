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
        <div className='aboutMe-body'></div>
        <div className='aboutMe-footer'>
            <div>
                +91-7259998980
            </div>
            <div className='divider'></div>
            <div>rahuldesai082@gmail.com</div>
        </div>
    </div>;
}
 
export default AboutMe;