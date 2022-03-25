import React from "react";
import "./sass/app.scss";

import { Navbar, Grid, Footer } from "./components/index";

function App(data) {
    return (
        <main className="container">
            {/* Navbar Section */}
            <Navbar />

            {/* Grid Section */}
            <Grid data={data} />

            {/* Footer Section */}
            <Footer />
        </main>
    );
}

export default App;
