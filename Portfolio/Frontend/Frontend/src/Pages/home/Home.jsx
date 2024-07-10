import React from 'react'
import './home.css'
import {motion} from 'framer-motion'

function Home() {
  return (
    <div className='home-con'>
      <div className="home-container">
        <div className="home-details">
          <div className="detail-role">MERN Stack Devloper</div>
          <div className="detail-name">Hi I'm RM Hamza</div>
          <div className="detail-name2">Web Developer</div>
          <div className="detail-p">
            MERN stack devloper passionate enough to learn new techonologies and skills. I have created lots of practical projects for better understading of logic.
            I have brilliant problem solving skill.
            I'm excited to tackle with more problems & make more projects.
          </div>
          <div className="detail-btns">
            <div className="btn-github btn">
             GitHub
            </div>
            <div className="btn-resume btn">
            Download CV
            </div>
          </div>
        </div>
        <div className="home-img">
         
            <motion.div className='img' 
            initial={{opacity:0, scale:0.1}}
            animate={{
              opacity:1,
              transition:{
                duration:0.4,
                ease:'easeIn'
                ,scale:1
              }
            }}
            >
        

           
            </motion.div>
          
        </div>
      </div>
      <div className="work-detail">
        <div className="work-box projects">100+
        <div className="box-text">Projects</div></div>
        <div className="work-box repos">40+
        <div className="box-text">Repos</div></div>
        <div className="work-box commits">400+
        <div className="box-text">Commits</div></div>
        <div className="work-box internships">1
        <div className="box-text">Internships</div></div>

      </div>
      
    </div>
    
  )
}

export default Home
