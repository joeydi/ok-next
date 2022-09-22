import { useRef, useEffect } from "react";

import clockOutline from "@/images/clock-outline.svg";
import clockMinuteHand from "@/images/clock-minute-hand.svg";
import clockHourHand from "@/images/clock-hour-hand.svg";

export default function Clock() {
    const clockMinuteHandRef = useRef(null);
    const clockHourHandRef = useRef(null);

    const scrollHandler = () => {
        const top = window.scrollY;
        clockMinuteHandRef.current.style.transform = `rotate(${top}deg)`;
        clockHourHandRef.current.style.transform = `rotate(${top / 30}deg)`;
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);

        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);

    return (
        <div className="clock-container">
            <img src={clockOutline.src} alt="" />
            <img src={clockMinuteHand.src} alt="" ref={clockMinuteHandRef} />
            <img src={clockHourHand.src} alt="" ref={clockHourHandRef} />
        </div>
    );
}
