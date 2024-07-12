import React from 'react'
import './services.css'
import serviceData from './serviceData'
import {motion} from 'framer-motion'

function Services() {
  return (
    <div className="services">
      <div className="services-container">
       {
        serviceData.map((data)=>{
          return(
            <div className="frontend service">
            <div className="frontend-h1 service-h1">
          {data.serviceName}
            </div>
            <div className="service-det">
             {data.serviceDet}
            </div>
            <div className="service-projects">
              {data.serviceProects}
            </div>
            <motion.div  whileTap={{ scale: 0.85 }} className="service-btn">
              {data.serviceBtn}
            </motion.div>
          </div>
          )
        })
       }
      </div>
    </div>

  )
}

export default Services
