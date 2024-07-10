import { useState } from 'react'
import './App.css'
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  useLoaderData,

} from "react-router-dom";
import Home from './Pages/home/Home'
import Services from './Pages/services/Services'
import Resume from './Pages/resume/Resume'
import Projects from './Pages/projects/Projects'
import Contact from './Pages/contact/Contact'
import Layout from './Pages/Layout/Layout';



const router = createBrowserRouter(
    createRoutesFromElements(
    <Route  element={<Layout/>}>
     
       
          <Route path="/" index element={<Home />} />
          <Route path="/services"  element={<Services />} />
          <Route path='/resume' element={<Resume/>} />
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
