import React from 'react'
import resumeExperience from './resumeExperience'
import './resumeExperience.css'

function ResumeExperience() {
  return (
    <div className='resumeExperience'>
      {
        resumeExperience.map((data,i)=>{
            return(
                <div className="heading">
                    <img src="/images/headingImg.png" alt="" className="headingImg" />
                    <div className="headingData">{data}</div>
                </div>
            )
        })
      }
      
    </div>
  )
}

export default ResumeExperience
