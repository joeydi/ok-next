import { useRef, useEffect } from "react";
import Image from "next/future/image";

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
            <div>
                <Image src={clockOutline} width="40" height="40" alt="" />
            </div>
            <div ref={clockMinuteHandRef}>
                <Image src={clockMinuteHand} width="40" height="40" alt="" />
            </div>
            <div ref={clockHourHandRef}>
                <Image src={clockHourHand} width="40" height="40" alt="" />
            </div>
        </div>
    );
}
