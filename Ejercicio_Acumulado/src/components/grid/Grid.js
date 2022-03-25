import "./grid.scss";
import Card from "../article/card";

export default function Grid(data) {
    return (
        <section className="grid">
            <h1 className="grid__title">Aumulado Grilla</h1>
            {/* Agregar tags */}
            {/* Cards */}
            {/* <Card image={data.promo_items.url} title={data.headline.basic} subtitle={data.promo_items.subtitle} date={data.display_date} /> */}
        </section>
    );
}

export { Grid };
