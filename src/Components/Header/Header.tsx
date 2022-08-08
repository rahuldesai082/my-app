import React, { useState } from 'react';
import { CENTER, LOWER_RIGHT } from '../../utils/Constants';
import './Header.css';
interface HeaderProps {
    handlePositionChange: (position: string) => void;
    showDraggableBox:boolean,
    position:string
}
 
const Header: React.FunctionComponent<HeaderProps> = ({showDraggableBox, handlePositionChange, position}) => {
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
                <input type ="radio" checked={position === CENTER} onChange={(e) => handlePositionChange(e.target.value)} name="position" value={CENTER}/> center
                <input type ="radio" checked={position === LOWER_RIGHT} onChange={(e) => handlePositionChange(e.target.value)} name="position" value={LOWER_RIGHT} /> Lower right
            </div>
        </div>
        <div className='instruction'>
            Press {showDraggableBox ?'Esc':'Enter'} to {showDraggableBox ?'hide':'show'} the box
            <div className='time'>{currentTime}</div>
        </div>
    </div>;
}
 
export default Header;