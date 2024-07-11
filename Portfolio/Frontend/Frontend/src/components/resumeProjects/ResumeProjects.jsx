import React, { useRef, useState } from 'react'
import './resumeProjects.css'
import projects from './resume_projects'

function ResumeProjects() {
    const [item, setItem] = useState(null)


    const MouseEnter = (id) => {
        setItem(id)

    }
    const MouseLeave = (id) => {
        setItem(null)
    }

    return (
        <div className='resumeProjects' >
            {
                projects.map((project) => {
                    return (
                        <div key={project.id} className='projectCard' onMouseLeave={MouseLeave} onMouseEnter={() => { MouseEnter(project.id) }}>
                            <div className='projectTitle'>{project.title}</div>
                            <div className='projectDescription'>{project.description}</div>
                            <div className='projectTechnologies'>Technologies: {project.technologies}</div>
                            <div className="projectStatus">Status {project.status}</div>

                            <div className={item == project.id ? 'projectImg showProjectImg' : 'projectImg'} >
                                <img key={project.id} src={project.image} alt="" />
                                <div className='projectLink'><a href={project.gitHubLink} target='blank'>Go to Project</a></div>
                            </div>
                        </div>
                    )

                })
            }

        </div>
    )
}

export default ResumeProjects
