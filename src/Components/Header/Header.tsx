import * as React from 'react';
import './Header.css';
interface HeaderProps {
    showDraggableBox:boolean
}
 
const Header: React.FunctionComponent<HeaderProps> = ({showDraggableBox}) => {
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return <div className='header'>
        <div className='position'>
            Position
        </div>
        <div className='instruction'>
            Press {showDraggableBox ?'Esc':'Enter'} to {showDraggableBox ?'hide':'show'} the box
            <div className='time'>{time}</div>
        </div>
    </div>;
}
 
export default Header;