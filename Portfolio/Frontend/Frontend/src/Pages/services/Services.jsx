import React from 'react'
import './services.css'

function Services() {
  return (
<div className="services">
 <div className="services-container">
 <div className="frontend service">
    <div className="frontend-h1 service-h1">
      Frontend Development
    </div>
    <div className="service-det">
      I have created lots of react js & JS projects using different packages & techonologies.
      I have creatd web templates for practise. Learning new technologies for advance websites design.
    </div>
  <div className="service-projects">140+</div>
  <div className="service-btn">Frontend Details</div>
  </div>
  <div className="backend service">
    <div className="backend-h1 service-h1">
      Backend Development
    </div>
    <div className="service-det">
      I have learned many backend concepts using node js, express js & mongoDB. Some are Authentication, Autherization, CRUD, Send Email, Payment, REST APIs & many more.
    </div>
  <div className="service-projects">15+</div>
  <div className="service-btn">Backend Details</div>
  </div>
  <div className="mernstack service">
    <div className="mernstack-h1 service-h1">
      MERN Stack Development
  </div>
  <div className="service-det">
    I am currently working with MERN Stack projects. Recent projects are House Booking App & Food Order Site.
  </div>
  <div className="service-projects">6+</div>
  <div className="service-btn">MERN Details</div>
  </div>
  <div className="other service">
    <div className="other-h1 service-h1">
      Other Technologies
  </div>
  <div className="service-det"></div>
  <div className="service-projects"></div>
  <div className="service-btn"></div>
  </div>
 </div>
</div>

  )
}

export default Services
