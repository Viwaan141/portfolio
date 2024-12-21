import React from 'react'
import "../App.css";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";
import { PiFileCppFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { IoDocument } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";
import { BsCalendar2EventFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { SiHubspot } from "react-icons/si";
import { MdAdsClick } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { SiGooglecloud } from "react-icons/si";
import { SiPalantir } from "react-icons/si";

const jobsection = () =>{
    return (
        <>
        <div className='d-flex justify-content-center'>
        <div className='d-flex mt-5' style={{fontSize:"25px"}}>
            <div >
              <img className='job-card-one' src="https://indiancompanies.in/wp-content/uploads/2020/05/TCS-Logo-Tata-consultancy-service-1024x610.png" alt="logo" />
            </div>
            <div  className='job-card-two ms-4'>
              <div>Tata Consultancy Services <a href="https://indiancompanies.in/wp-content/uploads/2020/05/TCS-Logo-Tata-consultancy-service-1024x610.png" rel="noreferrer" className='ms-2' target='_blank'><FaExternalLinkAlt/></a> </div>
              <div>Nov 2020 - Present</div>
               <div>Data Engineer</div>
               {/* <div>Remote</div> */}
               <div>Language : Python, SQL,</div>
               <div className='d-flex flex-wrap' style={{width:"450px"}}>Tool/Framework : Pyspark, Palantir, Foundry, GCP- BIGWquery, Power BI, Slate, Pandas, Numpy, jQuery </div>
               <div>Technical Skill : ETL, Cloud(GCP), Selenium</div>
               {/* <div>My Works : <a href="https://indiancompanies.in/wp-content/uploads/2020/05/TCS-Logo-Tata-consultancy-service-1024x610.png"  rel="noreferrer" className='ms-2'   target='_blank'><SiHubspot/></a> <a href="https://10times.com/experts" className='ms-2' rel="noreferrer" target='_blank'><FaUserAlt/></a> <a href="https://10times.com/experts" className='ms-2' rel="noreferrer" target='_blank'><BsCalendar2EventFill/></a> </div> */}
            </div>
        </div>
        </div>
        </>
    )
}

// const projects = () =>{
//   return (<>
//   <h2 className='mt-5 text-center  text-gradient'  style={{fontSize:"45px"}}>Projects</h2>
//   <div className='d-flex mt-2 justify-content-center gap-4 text-gradient' style={{fontSize:"35px"}}>
//    <a className='project-1' rel="noreferrer" href='https://aesthetic-sunshine-4ec466.netlify.app/' target='_blank'>
//     <MdAdsClick/> Live Crypto Tracker
//    </a>
//    <a className='project-2' rel="noreferrer" href='https://github.com/war-daddy/dsasimulator_hub.github.io' target='_blank'>
//     <MdAdsClick/> Dsa Simulator
//    </a>
//   </div>
//   </>);
// }

const main = () => {
  return (
    <div>
    <div className='d-flex justify-content-center'>
    <div  className='icons d-flex justify-content-evenly align-items-center gap-5'>
    <a href="https://www.linkedin.com/in/prakash-mehta-5b0558137/" rel="noreferrer nofollow" target="_blank"> <FaLinkedin/></a>
    <a href="https://github.com/Viwaan141/" rel="noreferrer nofollow" target="_blank"> <FaGithub /></a>
    <a href="https://x.com/Prakash21146569/" rel="noreferrer nofollow" target="_blank"> <FaXTwitter /></a>
    <a href="https://drive.google.com/file/d/10lXAS3qTfNEZgxF5pXZDUjhG7ITrwB6p/view?usp=drive_link" rel="noreferrer" target="_blank"> <IoDocument/></a>
    </div>
    </div>
     <div className='text-design text-center text-gradient' style={{marginLeft:'25px'}}> 
      Data Engineer
     </div>
     <div className='d-flex justify-content-center align-items-center gap-5' style={{fontSize:'25px'}}>
        <div> <div className='text-center'>Contact</div> <div>prakashkumarmehta738@gmail.com</div> </div>
        <div> <div className='text-center'>Location</div> <div>Gurgaon, India</div></div>
     </div>
     <div style={{overflow:"hidden"}}>
     <div className='icons d-flex justify-content-evenly skill-icon w-100'>
     <FaPython />
     <BsFiletypeSql />
     <SiPalantir />
     <SiGooglecloud />
     <FaHtml5 />
     <FaCss3Alt />
     <FaJsSquare />
  
     
  
     </div>
     </div>
     {jobsection()}
     {/* {projects()} */}
    </div>
  )
}

export default main