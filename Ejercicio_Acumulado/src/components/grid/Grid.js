import "./grid.scss";
import Card from "../article/Card";
import React from "react";

export default function Grid({ data }) {
    return (
        <section className="grid">
            <div className="grid__containaer__title">
                <h1 className="grid__title">Aumulado Grilla</h1>
            </div>
            {/* Agregar tags */}
            {/* Cards Section */}
            <section className="grid__card">
                {data.map((article, index) => {
                    if (article.subtype === "7") {
                        return (
                            <Card
                                key={index}
                                image={article.promo_items.basic.url}
                                title={article.headlines.basic}
                                subtitle={article.promo_items.basic.subtitle}
                                date={article.display_date}
                            />
                        );
                    }
                    {
                        /*  */
                    }
                })}
            </section>
        </section>
    );
}

export { Grid };
