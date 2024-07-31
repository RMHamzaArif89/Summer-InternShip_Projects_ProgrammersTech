import React from 'react'
import './home.css'
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useCountUp } from 'react-countup'
import homeData from './homeData';
import CountUp from 'react-countup'
import { Typewriter } from 'react-simple-typewriter'



function Home() {
 




  return (
    <div className='home-con'>
      <div className="home-container">
        <div className="home-details">
          <div className="detail-role">MERN Stack Devloper</div>
          <div className="detail-name" id='app'>
            {''}
          <span style={{ color: 'blueviolet', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={["i'm RM Hamza"]}
            loop={2}
            cursor
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={70}
            delaySpeed={1000}
           
          />
        </span>
          </div>
          <div className="detail-name2">   
       {' '}
        <span style={{ color: 'lightblue', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['MERN Stack Developer','React JS Developer','Backend Developer']}
            loop={5}
            cursor
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={70}
            delaySpeed={1000}
           
          />
        </span>
      
            
          </div>
          <div className="detail-p">
            MERN stack devloper passionate enough to learn new techonologies and skills. I have created lots of practical projects for better understading of logic.
            I have brilliant problem solving skill.
            I'm excited to tackle with more problems & make more projects.
          </div>
          <div className="detail-btns">
            <motion.div whileTap={{ scale: 0.85 }} className="btn-github btn">
              GitHub
            </motion.div>
            <motion.div whileTap={{ scale: 0.85 }} className="btn-resume btn">
              Download CV
            </motion.div>
          </div>
        </div>
        <div className="home-img">

          <motion.div className='img'
            initial={{ opacity: 0, scale: 0.1 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.4,
                ease: 'easeIn'
                , scale: 1
              }
            }}
          >



          </motion.div>

        </div>
      </div>
      <div className="work-detail">
        {
          homeData.map((data) => {
            return (
              <div className="work-box">
                <CountUp
                  end={data.value}
                  duration={4}
                  delay={1}

                />+
                <div className="box-text">{data.name}</div>
              </div>

            )
          })
        }
      </div>

    </div>

  )
}

export default Home
