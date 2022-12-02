
import Project from '../components/project/Project'
import { projects } from '../components/helpers/projectsList'

const Projects = () => {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">

                    {projects.map((projects, index) => {
                        return (
                            <Project
                                key={index}
                                title={projects.title}
                                img={projects.img} />
                        )
                    })}
                </ul>
            </div>
        </main>
    );
}

export default Projects;