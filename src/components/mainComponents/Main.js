
import TextSection from "../secComponents/TextSection"
import Header from "../secComponents/HeaderContainer"
import ProjectCard from "../secComponents/ProjectCard"
import "./Main.css"

function Main() {
    return (
        <main className="main">
            
            <Header></Header>
            <TextSection></TextSection>
            <ProjectCard></ProjectCard>
        </main>
    )
}

export default Main