import * as React from 'react';
import { MY_PROFILE } from '../../route';
import './Footer.css';
interface FooterProps {
    
}
 
const Footer: React.FunctionComponent<FooterProps> = () => {
    return <div className='footer'>
        <div className='link'>GOTO: <a href={MY_PROFILE}>My profile</a></div>
    </div>;
}
 
export default Footer;