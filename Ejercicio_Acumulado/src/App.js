import React, { useEffect, useState } from "react";
import "./sass/app.scss";

import { Navbar, Grid, Footer } from "./components/index";

function App() {
    const url = "https://api-test-ln.herokuapp.com/articles";
    const [data, setData] = useState();

    const fetchApi = async () => {
        const response = await fetch(url);

        const responseJSON = await response.json();
        setData(responseJSON);
    };

    useEffect(() => fetchApi(), []);

    return (
        <main>
            {/* Navbar Section */}
            <Navbar />
            {}
            {/* Grid Section */}
            <Grid data={data.articles} />

            {/* Footer Section */}
            <Footer />
        </main>
    );
}

export default App;
