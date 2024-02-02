
import MediaCard from '../../components/card'
import content from './projectContent.json'
import './projects.css'

function Projects() {
    
    return (
        <div>
            My Experience
            <div className="projectContainer">
                {content.projects.map((project) => 
                <MediaCard 
                title={project.title} 
                description={project.description} 
                tags={project.tags}
                mainTag={project.mainTag}/>)}
            </div>
        </div>
    )
}

export default Projects