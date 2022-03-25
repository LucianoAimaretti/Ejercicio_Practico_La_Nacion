import "./card.scss";

const transformDate = (date) => {
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    let current_datetime = new Date();
    let formatted_date = current_datetime.getDate() + " de " + months[current_datetime.getMonth()] + " de " + current_datetime.getFullYear();
    return formatted_date;
};

export function Card({ image, title, subtitle, date }) {
    const newDate = transformDate(date);
    return (
        <>
            <article className="article_container">
                {/* Image Section  */}
                <a href="/" className="image">
                    <img className="image_style" src={image} alt={title} />
                </a>
                {/*  Title Section  */}
                <a className="header" href="/" title={title + ". " + subtitle}>
                    <h1 className="title">
                        <b>{title}. </b>
                        {subtitle}
                    </h1>
                </a>
                {/* Date Section */}
                <a href="/" className="date">
                    <h4 className="date_styles">{newDate}</h4>
                </a>
            </article>
        </>
    );
}

export default Card;
