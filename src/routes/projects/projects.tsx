
import MediaCard from '../../components/card'
import content from './projectContent.json'
import './projects.css'

function Projects() {
    
    return (
        <div>
            Projects
            <div className="projectContainer">
                {content.projects.map((project) => 
                <MediaCard 
                title={project.title} 
                description={project.description} 
                tags={project.tags}
                mainTag={project.mainTag}
                href={project.href}/>)}
            </div>
        </div>
    )
}

export default Projects