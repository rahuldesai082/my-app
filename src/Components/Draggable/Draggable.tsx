import * as React from 'react';
import { useState } from 'react';
import './Draggable.css';

interface DraggableProps {
    showDraggableBox : boolean
}
 
interface DraggableState {
    diffX: number,
    diffY: number,
    dragging: boolean,
    style:any
}
 
class Draggable extends React.Component<DraggableProps, DraggableState> {
    constructor (props: DraggableProps) {
        super(props);
        this.state = {
            diffX:0,
            diffY:0,
            dragging:false,
            style: {}
        };
        this._dragStart = this._dragStart.bind(this);
        this._dragging = this._dragging.bind(this);
        this._dragEnd = this._dragEnd.bind(this);
    }

    _dragStart = (e:any) => {
        this.setState({
            diffX: e.screenY - e.currentTarget.getBoundingClientReact().top,
            diffY: e.screenX - e.currentTarget.getBoundingClientReact().left,
            dragging: true
        });
    }
    _dragging = (e:any) => {
        if(this.state.dragging) {
            const left = e.screenX - this.state.diffX;
            const top = e.screenY - this.state.diffY;
            this.setState({
                style:{
                    left: left,
                    top: top
                }
            });
        }
    }
    _dragEnd = (e:any) => {
        this.setState({
            dragging: false
        });
    }
    render() { 
        const {showDraggableBox}=this.props;
        return <div className='draggable-container'>
        {
            showDraggableBox && <div style={this.state.style} className='draggable-box' onMouseDown={this._dragStart} onMouseMove={this._dragging} onMouseUp={this._dragEnd}>
                <div className='position'>Position</div>
                <div className='label'>Drag me around</div>
            </div>
        }
    </div>;
    }
}
 
export default Draggable;