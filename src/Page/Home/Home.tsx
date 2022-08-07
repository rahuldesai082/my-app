import React, { FunctionComponent, useEffect, useState } from 'react';
import Draggable from '../../Components/Draggable/Draggable';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import './Home.css'
interface HomeProps {
    
}
 
const Home: FunctionComponent<HomeProps> = () => {
    const [showDraggableBox, setShowDraggableBox] = useState(true);
    // Add event listener to hide the button when the user presses the Esc key
    useEffect(() => {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && showDraggableBox) {
                setShowDraggableBox(false);
            }
            // add event listener to show the button when the user presses the enter key
            if (e.keyCode === 13 && !showDraggableBox) {
                setShowDraggableBox(true);
            }
        });
    }, [showDraggableBox]);
    console.log({showDraggableBox});
    return <>
        <Header showDraggableBox={showDraggableBox}/>
        <Draggable showDraggableBox={showDraggableBox}/>
        <Footer/>
    </>;
}
 
export default Home;