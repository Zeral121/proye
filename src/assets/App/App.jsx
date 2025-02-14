import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Menu from './Menu';
import Header from './Header';
import Panel from './Panel';



function App(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
    const location = useLocation();

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setIsSmallScreen(true); 
            } else {
                setIsSmallScreen(false); 
            }

            if (window.innerWidth > 768 && isOpen) {
                setIsOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [isOpen]); 
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="h-screen">
            <>
                <Header ></Header>
            </>

        <Routes>
            <Route path="/" element={<Menu />}></Route>
            <Route path='/Cards' element={<Panel/>}></Route>
        </Routes>
        </div>
);
}

export default App;
