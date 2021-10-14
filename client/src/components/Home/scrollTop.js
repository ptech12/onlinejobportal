import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import './style.css'
const Scrolltop = () => {
    const [vis, setVis] = useState(false)

    const toggleVis = () => {
        const scrolled = document.documentElement.scrollTop
        if (scrolled > 300) {
            setVis(true);
        } else if (scrolled <= 300) {
            setVis(false);
        }
    }
    const scrollToTop = () => {
        window.scrollTo( {
            top: 0,
            behavior: 'auto'
        })
    }

    window.addEventListener('scroll', toggleVis);

    return (
        <div className="top-btn">
            <FaArrowCircleUp onClick={scrollToTop} style={{display: vis ? 'inline' : 'none'}} />
        </div>
    );
}

export default Scrolltop;
