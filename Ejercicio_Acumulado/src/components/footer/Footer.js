import { useEffect, useState } from "react";

import { Mobile, Desktop } from "./Components";

export default function Footer() {
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

    return <footer className="footer">{isNarrowScreen ? <Mobile /> : <Desktop />}</footer>;
}

export { Footer };
