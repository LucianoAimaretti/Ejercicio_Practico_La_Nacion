import "./card.scss";

const transformDate = (date) => {
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    let datetime = new Date(date);
    let formatted_date = datetime.getDate() + " de " + months[datetime.getMonth()] + " de " + datetime.getFullYear();
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
                    {newDate}
                </a>
            </article>
        </>
    );
}

export default Card;
