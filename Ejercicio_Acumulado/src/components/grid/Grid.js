import React, { useEffect, useState } from "react";
import Card from "../article/Card";
import "./grid.scss";

const GenerateTags = (data) => {};

export default function Grid({ data }) {
    const [visible, setVisible] = useState(9);
    const [button, setButton] = useState("");

    const showMoreArticles = () => {
        setVisible((prevValue) => prevValue + 15);
    };

    useEffect(() => {
        if (visible > 27) {
            setButton("__invisible");
        }
    }, [visible]);

    return (
        <section className="grid">
            <div className="grid__containaer__title">
                <h1 className="grid__title">Aumulado Grilla</h1>
            </div>
            {/* Agregar tags */}
            {/* Cards Section */}
            <section className="grid__card">
                {data.slice(0, visible).map((article, index) => {
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
                })}
            </section>
            <div className={`grid__more${button}`}>
                <button className="grid__more__btn" onClick={showMoreArticles}>
                    MÁS NOTAS DE ACUMULADO GRILLA
                </button>
            </div>
        </section>
    );
}

export { Grid };
