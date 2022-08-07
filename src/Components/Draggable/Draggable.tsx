import * as React from 'react';
import './Draggable.css';
interface DraggableProps {
    showDraggableBox:boolean
}
 
const Draggable: React.FunctionComponent<DraggableProps> = ({showDraggableBox}) => {
    return <div className='draggable-container'>
        {
            showDraggableBox && <div className='draggable-box'>
                <div className='position'>Position</div>
                <div className='label'>Drag me around</div>
            </div>
        }
    </div>;
}
 
export default Draggable;