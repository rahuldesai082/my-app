import React, { FunctionComponent, useEffect, useState } from 'react';
import OuterBox from '../../Components/OuterBox/OuterBox';
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
    
    return <>
        <Header showDraggableBox={showDraggableBox}/>
        <OuterBox showDraggableBox={showDraggableBox}/>
        <Footer/>
    </>;
}
 
export default Home;