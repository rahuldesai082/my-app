import * as React from 'react';
import { ABOUT_ME } from '../../route';
import './Footer.css';
interface FooterProps {
    
}
 
const Footer: React.FunctionComponent<FooterProps> = () => {
    return <div className='footer'>
        <div className='link'>GOTO: <a href={ABOUT_ME}>Page 2</a></div>
    </div>;
}
 
export default Footer;