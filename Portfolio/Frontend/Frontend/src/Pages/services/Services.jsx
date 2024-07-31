import React, { useState } from 'react'
import './services.css'
import serviceData from './serviceData'
import { ImCross } from "react-icons/im";

import { motion, AnimatePresence } from 'framer-motion'

function Services() {
  const [selectedId, setSelectedId] = useState(null)
  const cardVariants = {
    hidden: { opacity: 0, y: 200 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
      },

    },
  };

  const buttonStyle={
    color: 'white',
    fontSize:'1.8rem',
    padding:'0rem',
    cursor: 'pointer',
    position:'absolute',
    right:'0.5rem',
    top:'0.5rem',
    border:'none',
    outline:'none',
    backgroundColor:'rgba(32, 178, 171, 0.811)',
  }

  return (
    <div className="services">
      <div className="services-container">
        {serviceData.map(data => (
          <motion.div className='service'
            variants={cardVariants}
            layoutId={data.id} onClick={() =>
              setSelectedId(data.id)}>
            <motion.h5 className='service-h1'>{data.serviceName}</motion.h5>

            <motion.div className='service-det'>{data.serviceDet}</motion.div>
            <motion.div className="service-projects">
              {data.serviceProects}
            </motion.div>
            <motion.div whileTap={{ scale: 0.85 }} className="service-btn">
              {data.serviceBtn}
            </motion.div>

          </motion.div>
        ))}

<AnimatePresence>
          {selectedId && (
            <div className="serviceSelectedCon">
              <motion.div className='serviceCardSelected' layoutId={selectedId}>
                <motion.h2 className='serviceCardSelectedH2 selectedItem'> <img src="/images/smesterIcon.png" alt="" /> {serviceData[selectedId - 1].serviceName} </motion.h2>
                <motion.heading className='serviceCardSelectedHeading'>Projects</motion.heading>
               {
                serviceData[selectedId - 1].projects.map((data)=>{
                  return(
                    <motion.projects className='serviceCardSelectedProjects'>{data}</motion.projects>
                  )
                })
               }
                  <motion.button style={buttonStyle} onClick={() => setSelectedId(null)}><ImCross /></motion.button>
                </motion.div>
            </div>

          )}
        </AnimatePresence>

      
      </div>
    
    </div>

  )
}

export default Services
