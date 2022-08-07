import React, { useState } from 'react';
import './Header.css';
interface HeaderProps {
    showDraggableBox:boolean
}
 
const Header: React.FunctionComponent<HeaderProps> = ({showDraggableBox}) => {
    var getTime = (date: Date) => date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    
    const [currentTime, setCurrentTime] = useState(getTime(new Date()));
    
    React.useEffect(() => {
        const timer= setInterval(() => setCurrentTime(getTime(new Date())), 1000);
        return () => clearInterval(timer);
    });
    return <div className='header'>
        <div className='position'>
            <div>Position</div>
            <div className='position-x'>
                <input type ="radio" name="position" value="center"/> center
                <input type ="radio" name="position" value="lower-right" /> Lower right
            </div>
        </div>
        <div className='instruction'>
            Press {showDraggableBox ?'Esc':'Enter'} to {showDraggableBox ?'hide':'show'} the box
            <div className='time'>{currentTime}</div>
        </div>
    </div>;
}
 
export default Header;