import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import Draggable from 'react-draggable';
import './OuterBox.css';

interface OuterBoxProps {
    showDraggableBox : boolean
    defaultBoxPosition: string
    handlePositionChange: (state:string)=>void; 
}
 
const OuterBox: React.FunctionComponent<OuterBoxProps> = ({showDraggableBox, defaultBoxPosition, handlePositionChange}) => {
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState<{ x: number, y: number } | undefined>({x: (window.innerWidth/2-150), y: (window.innerHeight/2-200)});
    const [defaultPosition, setDefaultPosition] = useState<string>('');
    const containerRef = useRef<HTMLDivElement>(null);
    const draggableBoxRef = useRef<Draggable>(null);
    
    useEffect(() => {
        setDefaultPosition(defaultBoxPosition)
    }, [defaultBoxPosition])
    
    return (<div className='wrapper' ref={containerRef}>
        <div className='draggable-container'>
        {
            
            showDraggableBox && <Draggable
            onMouseDown={()=>{
                setDefaultPosition('');
                setPosition(undefined);
            }}
            ref={draggableBoxRef}
            onStart={() => {
                setIsDragging(true);
                setPosition(undefined);
                handlePositionChange('')
            }}
            onStop={() => setIsDragging(false)}
            position={position}
            handle={'.draggable-box'}
            defaultPosition={position}
            bounds='parent'>
                <div className={`draggable-box ${defaultPosition}`} style={{}}>
                    <div className='event-state'>{isDragging?'Dragging...':''}</div>
                    <div className='label'>Drag me around</div>
                </div>
            </Draggable>
        }
        </div>
    </div>);
}
 
export default OuterBox;