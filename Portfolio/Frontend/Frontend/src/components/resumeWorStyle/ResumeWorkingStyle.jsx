import React from 'react'
import workingStyle from './workingStyleData'
import './resumeWorkingStyle.css'

function ResumeWorkingStyle() {
    return (
        <div className='workingStyle'>
            <div className="workingStyleDetail">
                I learn by solving problems using projects. I have created libraries on GitHub after testing of code for future use. Demonstrated expertise in designing and implementing innovative solutions that enhance user experiences. Eager to contribute my technical proﬁciency and strong communication skills to drive excellence in web application development. I make my work easy by using reusable components.
            </div>
            <div className="workingStyleCards">
                {
                    workingStyle.map((data) => {
                        return (
                            <div className="workingStyleCard">
                                <img src={data.icon} alt="" className="cardImg" />
                                <div className="cardName">{data.library}</div>
                                <div className="cardDetail">{data.detail}</div>
                                <div className="cardLink"><a href={data.link} target='blank'>Go to Library</a></div>
                                <div className="cardStatus">{data.status}</div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default ResumeWorkingStyle
