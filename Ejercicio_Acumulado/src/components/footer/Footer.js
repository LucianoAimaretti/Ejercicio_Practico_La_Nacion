import { useEffect, useState } from "react";

import { Row_mobile, Row_desktop } from "./Components";

export default function Footer() {
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

    return <footer className="footer">{isNarrowScreen ? <Row_mobile /> : <Row_desktop />}</footer>;
}

export { Footer };
