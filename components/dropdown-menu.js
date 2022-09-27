import { useRef, useEffect, useState } from "react";
import Link from "next/link";

export default function DropdownMenu({ name, items }) {
    const ref = useRef();
    const [active, setActive] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setActive(false);
            }
        };

        document.addEventListener("click", handleClickOutside, true);

        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, []);

    return (
        <div className="btn-group" ref={ref}>
            <button type="button" className="btn btn-default dropdown-toggle" onClick={() => setActive(!active)}>
                {name} <span className="caret"></span>
            </button>
            <ul className={`dropdown-menu ${active ? "active" : ""}`} role="menu">
                {items.map((item) => (
                    <li key={item.title}>
                        <Link href={item.url}>
                            <a className="dropdown-item" onClick={() => setActive(false)}>
                                {item.title}
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
