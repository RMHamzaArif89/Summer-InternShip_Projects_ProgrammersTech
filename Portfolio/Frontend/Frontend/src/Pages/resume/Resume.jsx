import React from 'react'
import './resume.css'
import { NavLink, Outlet } from 'react-router-dom'

function Resume() {
  return (
    <div className='resume'>
      <div className="resume-list">
        <NavLink className='resumeLink' to="/resume/resumeProjects" activeClassName="active">Projects</NavLink>
        <NavLink className='resumeLink' to="/resume/skills" activeClassName="active">Skills</NavLink>
        <NavLink className='resumeLink' to="/resume/workingStyle" activeClassName="active">Working Style</NavLink>
        <NavLink className='resumeLink' to="/resume/experience" activeClassName="active">Experience</NavLink>
        <NavLink className='resumeLink' to="/resume/education" activeClassName="active">Education</NavLink>


      </div>
      <div className="resume-detail">
        <Outlet />
      </div>
    </div>
  )
}

export default Resume
