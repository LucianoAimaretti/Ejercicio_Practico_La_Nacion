import React from "react";
import "./sass/app.scss";

import Navbar from "./components/Navbar";
import { Grid, Footer } from "./components/index";

function App() {
    const [count, setCount] = React.useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <>
            {/* Navbar Section */}
            <Navbar />

            {/* Grid Section */}
            <Grid />

            {/* Footer Section */}
            <Footer />
        </>
    );
}

export default App;
