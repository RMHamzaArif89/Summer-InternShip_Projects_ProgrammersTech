import { useState } from 'react'
import './App.css'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  useLocation

} from "react-router-dom";

import Home from './Pages/home/Home'
import Services from './Pages/services/Services'
import Resume from './Pages/resume/Resume'
import Projects from './Pages/projects/Projects'
import Contact from './Pages/contact/Contact'
import Layout from './Pages/Layout/Layout';
import ResumeProjects from './components/resumeProjects/ResumeProjects';
import ResumeSkills from './components/resumeSkills/ResumeSkills';
import ResumeWorkingStyle from './components/resumeWorStyle/ResumeWorkingStyle';
import ResumeExperience from './components/resumeExperience/ResumeExperience';


// const location=useLocation()
const router = createBrowserRouter(
    createRoutesFromElements(
    <Route element={<Layout/>}>
     
       
          <Route path="/" index element={<Home />} />
          <Route path="/services"  element={<Services />} />
          <Route path='/resume' element={<Resume/>} >
            <Route path='/resume/resumeProjects' index element={<ResumeProjects/>}/>
            <Route path='/resume/skills' element={<ResumeSkills/>}/>
            <Route path='/resume/WorkingStyle' element={<ResumeWorkingStyle/>}/>
            <Route path='/resume/experience' element={<ResumeExperience/>}/>
            <Route path='/resume/education' element={''}/>
          </Route>
          <Route path='/projects' element={<Projects/>} />
          <Route path='/contact' element={<Contact/>} />


    </Route>  
));

function App(){
 
    return(
        <RouterProvider router={router}/>
    
    )
}

export default App
