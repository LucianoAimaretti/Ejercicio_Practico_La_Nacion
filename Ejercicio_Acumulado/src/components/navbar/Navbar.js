import { useState, useEffect } from "react";

import { Nav_Mobile, Nav_Desktop } from "./Component";

export default function Navbar() {
    const [isNarrowScreen, setIsNarrowScreen] = useState(false);

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
    }, [window.matchMedia("(max-width: 1023px)")]);

    return <nav className="navbar">{isNarrowScreen ? <Nav_Mobile /> : <Nav_Desktop />}</nav>;
}

export { Navbar };
