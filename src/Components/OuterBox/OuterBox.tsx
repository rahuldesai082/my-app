import * as React from 'react';
import { useState } from 'react';
import Draggable from 'react-draggable';
import './OuterBox.css';

interface OuterBoxProps {
    showDraggableBox : boolean
}
 
const OuterBox: React.FunctionComponent<OuterBoxProps> = ({showDraggableBox}) => {
    const [isDragging, setIsDragging] = useState(false);
    const [defaultPosition, setDefaultPosition] = useState<{x:number,y:number}|null>(null);
    React.useEffect(() => {
        const handleCardPosition = () => {
            setDefaultPosition({x: (window.innerWidth/2-150), y: (window.innerHeight/2-200)});
            console.log('add screen resize event listener',{x: (window.innerWidth/2-150), y: (window.innerHeight/2-200)});
        }
        // add screen resize event listener
        window.addEventListener('resize', handleCardPosition);
        return () => {
            // remove screen resize event listener
            window.removeEventListener('resize', handleCardPosition);
        }
    },[]);
    React.useLayoutEffect(() => {
        if (!defaultPosition)
            setDefaultPosition({x: (window.innerWidth/2-150), y: (window.innerHeight/2-200)});
    } , [defaultPosition]);
    return (<div className='draggable-container'>
    {
        showDraggableBox && <Draggable 
        onStart={(e:any)=>{
            setIsDragging(true)
        }}
        onStop={(e:any)=>{
            setIsDragging(false);
        }}
        defaultPosition={defaultPosition||undefined}
        bounds='parent'>
            <div className='draggable-box'>
                <div className='event-state'>{isDragging?'Dragging...':''}</div>
                <div className='label'>Drag me around</div>
            </div>
        </Draggable>
    }
</div>);
}
 
export default OuterBox;