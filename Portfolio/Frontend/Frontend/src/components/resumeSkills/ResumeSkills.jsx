import React from 'react'
import './resumeSkills.css'
import Skills from './resumeSkillsDatajs'

function ResumeSkills() {
    return (
        <div className='resumeSkills'>
            {
                Skills.map((skill) => {
                    return (
                        <div className="resumeSkillCard">
                            <img src={skill.image} alt="" className="img" />
                            <div className="heading">{skill.heading}</div>
                        </div>
                    )

                })
            }
        </div>
    )
}

export default ResumeSkills
