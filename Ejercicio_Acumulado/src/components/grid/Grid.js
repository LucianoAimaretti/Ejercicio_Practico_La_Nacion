import React, { useEffect, useState } from "react";
import Card from "../article/Card";
import "./grid.scss";

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

    const [tags, setTags] = useState([]);

    const generateTags = (data) => {
        let tag = [];
        data.map((article) => {
            if (article.taxonomy.tags[0]) {
                tag.push(article.taxonomy.tags[0].text);
            }
        });
        setTags(tag);
    };

    useEffect(() => {
        generateTags(data);
    }, []);

    return (
        <>
            <section className="grid">
                <div className="title_container">
                    <h1 className="title_container__header">Acumulado Grilla</h1>
                    <div className="title_container__tags">
                        {tags.slice(0, 10).map((tag, index) => {
                            return (
                                <a key={index} href="/">
                                    {tag}
                                </a>
                            );
                        })}
                    </div>
                </div>
                {/* Cards Section */}
                <article className="card">
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
                </article>
                <div className={`more${button}`}>
                    <button className="more__btn" onClick={showMoreArticles}>
                        MÁS NOTAS DE ACUMULADO GRILLA
                    </button>
                </div>
            </section>
        </>
    );
}

export { Grid };
