import { useState, useEffect } from "react";

import { Mobile, Desktop } from "./Component";

export default function Navbar() {
    const [isNarrowScreen, setIsNarrowScreen] = useState(false);
    const windowMatch = window.matchMedia("(max-width: 1023px)");

    useEffect(() => {
        // set initial value
        const mediaWatcher = window.matchMedia("(max-width: 1023px)");
        setIsNarrowScreen(mediaWatcher.matches);

        //watch for updates
        function updateIsNarrowScreen(e) {
            setIsNarrowScreen(e.matches);
        }
        mediaWatcher.addEventListener("change", updateIsNarrowScreen);

        // clean up after ourselves
        return function cleanup() {
            mediaWatcher.removeEventListener("change", updateIsNarrowScreen);
        };
    }, [windowMatch]);

    return <nav className="navbar">{isNarrowScreen ? <Mobile /> : <Desktop />}</nav>;
}

export { Navbar };
