import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import Draggable from 'react-draggable';
import { CENTER, LOWER_RIGHT } from '../../utils/Constants';
import './OuterBox.css';

interface OuterBoxProps {
    showDraggableBox : boolean
    defaultBoxPosition: string
    handlePositionChange: (state:string)=>void; 
}
 
const OuterBox: React.FunctionComponent<OuterBoxProps> = ({showDraggableBox, defaultBoxPosition, handlePositionChange}) => {
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState<{ x: number, y: number } | undefined>({x: (window.innerWidth/2-150), y: (window.innerHeight/2-200)});
    const containerRef = useRef<HTMLDivElement>(null);
    const draggableBoxRef = useRef<Draggable>(null);

    useEffect(() => {
        if (defaultBoxPosition === CENTER) {
            setPosition({x: ((window.innerWidth/2) - 150), y: ((window.innerHeight/2) - 200)});
        }
        if (defaultBoxPosition === LOWER_RIGHT) {
            setPosition({x: (window.innerWidth-300), y: (window.innerHeight-420)});
        }
    }, [defaultBoxPosition])
    
    return (<div className='wrapper' ref={containerRef}>
        <div className='draggable-container'>
        {   
            showDraggableBox && <Draggable
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
                <div className={`draggable-box`}>
                    <div className='event-state'>{isDragging?'Dragging...':''}</div>
                    <div className='label'>Drag me around</div>
                </div>
            </Draggable>
        }
        </div>
    </div>);
}
 
export default OuterBox;