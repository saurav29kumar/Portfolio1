import React from "react";

import pic from "../../public/photo.avif"

import { BsLinkedin } from "react-icons/bs";
import { FaSquareGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

import { ReactTyped} from "react-typed";
function Home(){
    return(
        <>
          <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
                    <span className="text-xl">Welcome in My Feed</span>
                    <div className="flex flex-col text-5xl md:text-4xl mt-2">
                       <h1 className="mb-2 font-semibold">Hello, I am a </h1>
                       {/* <span className="text-red-700 font-bold">Developer</span> */}
                       <ReactTyped strings={["Forntend Developer" , "Coder" , "Programer"]}typeSpeed={40} backSpeed={50} loop={true} className="text-red-600 font-bold text-5xl text-nowrap mb-4"/> 
                    </div>
                    <p className="text:md font-semibold md:text-md text-justify">I am an eager and adaptable individual, constantly seeking new challenges to fuel my passion for learning. My dedication to excellence ensures that I consistently produce high-quality work. With a positive attitude and a focus on growth, I am poised to make impactful contributions and achieve great success.</p>
                    <br />
                    <div className="flex justify-center md:justify-start">
                        <div className="space-y-2">
                            <h1 className="font-bold">Available on </h1>
                            <ul className="flex space-x-5">
                                <li>
                                    <a href="https://www.linkedin.com/in/saurav29kumar/" target="_blank">
                                    <BsLinkedin  size={25} className="cursor-pointer "/></a>
                                </li>
                                <li>
                                    <a href="https://github.com/saurav29kumar" target="_blank">
                                    <FaSquareGithub  size={28} className="cursor-pointer"/></a>
                                </li>
                                <li>
                                    <a href="https://leetcode.com/u/sauravkushwaha2001/" target="_blank">
                                    <SiLeetcode  size={27} className="cursor-pointer"/></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 md:ml-48 md:mt-20 order-1 r">
                   <img src={pic} alt="" className="rounded-full md:w-[500px] md:h-[500px] object-cover"/>
                </div>
            </div>
            <br />
            <br />
            <hr />
          </div>
        </>
    )
}
export default Home;