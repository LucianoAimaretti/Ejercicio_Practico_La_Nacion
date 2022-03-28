import React, { useEffect, useState } from "react";
import { getData } from "./services";
import { Navbar, Grid, Footer } from "./components";

import "./sass/app.scss";

function App() {
    const [data, setData] = useState();

    useEffect(async () => {
        async function loadData() {
            const response = await getData();
            if (response.status === 200) {
                setData(response.data.articles);
            }
        }
        loadData();
    }, []);

    return data ? (
        <main>
            {/* Navbar Section */}
            <Navbar />
            {/* Grid Section */}
            <Grid data={data} />

            {/* Footer Section */}
            <Footer />
        </main>
    ) : null;
}

export default App;
