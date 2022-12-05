import "./Card.css"
import Description from "./Description";
import Media from "./Media";
import Title from "./Title";

function Card() {
    return (
        <div className="Card">
            <Media></Media>
            <Title></Title>
            <Description></Description>
        </div>
    )
}

export default Card;