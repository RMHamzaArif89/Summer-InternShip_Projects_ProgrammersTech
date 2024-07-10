import React from 'react'
import './resume.css'
import {NavLink,Outlet} from 'react-router-dom'

function Resume() {
  return (
    <div className='resume'>
<div className="resume-list">
  <NavLink className='resumeLink' to="/projects" activeClassName="active">Projects</NavLink>
  <NavLink className='resumeLink' to="/skills" activeClassName="active">Skills</NavLink>
  <NavLink className='resumeLink' to="/workingStyle" activeClassName="active">Working Style</NavLink>
  <NavLink className='resumeLink' to="/experience" activeClassName="active">Experience</NavLink>
  <NavLink className='resumeLink' to="/education" activeClassName="active">Education</NavLink>
  <Outlet/>

</div>
    </div>
  )
}

export default Resume
