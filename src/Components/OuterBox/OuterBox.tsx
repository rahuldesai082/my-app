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
    const [position, setPosition] = useState<{ x: number, y: number } | undefined>(undefined);
    const containerRef = useRef<HTMLDivElement>(null);
    const draggableBoxRef = useRef<HTMLDivElement>(null);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleCardPosition = (position:string) => {
        const boxHeight = draggableBoxRef.current?.offsetHeight;
        const boxWidth = draggableBoxRef.current?.offsetWidth;

        if (position === CENTER) {
            setPosition({x: ((window.innerWidth/2) - (boxWidth ? boxWidth/2 : 0)), y: ((window.innerHeight/2) - (boxHeight ? boxHeight/1.25 : 0))});
        }
        if (position === LOWER_RIGHT) {
            setPosition({x: (window.innerWidth-300), y: (window.innerHeight-(boxHeight?boxHeight * 1.5 : 0))});
        }
    }

    useEffect(() => {
        defaultBoxPosition && handleCardPosition(defaultBoxPosition);
    },[defaultBoxPosition])

    useEffect(() => {
        window.addEventListener('resize', ()=>handleCardPosition(defaultBoxPosition));
        return () => {
            window.removeEventListener('resize', ()=>handleCardPosition(defaultBoxPosition));
        }
    },[defaultBoxPosition]);
    
    return (<div className='wrapper' ref={containerRef}>
        <div className='draggable-container'>
        {   
            showDraggableBox && <Draggable
            onStart={() => {
                setIsDragging(true);
                setPosition(undefined);
                handlePositionChange('');
            }}
            onStop={() => setIsDragging(false)}
            position={position}
            handle={'.draggable-box'}
            defaultPosition={position}
            bounds='parent'>
                <div className={`draggable-box`} ref={draggableBoxRef}>
                    <div className='event-state'>{isDragging?'Dragging...':''}</div>
                    <div className='label'>Drag me around</div>
                </div>
            </Draggable>
        }
        </div>
    </div>);
}
 
export default OuterBox;