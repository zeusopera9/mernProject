import React from 'react';
import { useRef, useEffect } from 'react';


const CardBorder = () => {
    const backgroundStyle = {
        background: "black",
        position: "absolute",
        width: "100%",
        height: "100%",
        inset: "0 0",
        zIndex: 1,
        borderRadius: "inherit",
    }
    const borderStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        borderRadius: "inherit",
        zIndex: -1,
        background: "linear-gradient( 45deg, rgba(0, 220, 130, 1), rgba(54, 228, 218, 1), rgba(22, 167, 158, 1))",
        width: "calc(100% + 1px)",
        height: "calc(100% + 1px)",
    }

    const cardBorderRef = useRef();

    useEffect(() => {
        const cardBorder = cardBorderRef.current;

        const cap = (value, min, max) => {
            value = Math.min(value, max);
            value = Math.max(value, min);
            return value;
        }
        
        const normalize = (value ,oldMin, oldMax, newMin, newMax, capToggle = false) => {
            value = (value - oldMin)/(oldMax - oldMin);
            value = (value * (newMax - newMin)) + newMin;
            if(capToggle){
                value = cap(value, newMin, newMax);
            }
            return value;
        }
    
        document.body.addEventListener('mousemove', (event) => {
            const {clientX, clientY} = event;
        
            let cords = cardBorder.getBoundingClientRect();
            let center = [
                (cords.x),
                (cords.y)
            ];
            
            let offset = [
                normalize(clientX - center[0], 0, window.innerWidth/2, -1, 1, true),
                normalize(clientY - center[1], 0, window.innerHeight/2, -1, 1, true)
            ];
            cardBorder.animate(
                {
                    translate: `${offset[0]}px ${offset[1]}px`,
                },
                {duration: 1000, fill: "forwards"})
        })
    }, []);

    return (
        <>
            <div style={backgroundStyle}></div>
            <div style={borderStyle} ref={cardBorderRef}></div>
        </>
    )
}

export default CardBorder;
