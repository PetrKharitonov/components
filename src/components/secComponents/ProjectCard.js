import CardsRow from "./CardsRow";
import "./ProjectCard.css"

function ProjectCard() {
    return (
        <div className="ProjectCard _container">
            <CardsRow></CardsRow>
            <CardsRow></CardsRow>
            <CardsRow></CardsRow>
        </div>
    )
}

export default ProjectCard;