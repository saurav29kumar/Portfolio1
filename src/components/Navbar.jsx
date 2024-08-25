import React, { useState } from "react";
import pic from "../../public/photo.avif"
import { RiMenuLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import {Link} from "react-scroll"
function Navbar(){
    const [menu,setMenu] = useState(false)
    const navbar = [
        { text:"Home"},
        { text:"About"},
        { text:"Portfolio"},
        { text:"Experiance"},
        { text:"Contact"}
    ]

    return(
        <>
            <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
               <div className="flex justify-between items-center h-16">
                    <div className="flex space-x-2">
                        <img className="w-14 h-14 rounded-full" src={pic} alt="" />
                        <h1>
                            <span className="text-2xl font-bold text-red-500">S</span>aurav
                            <p className="text-nowrap">Web Developer</p>
                        </h1>
                    </div>
                    <div>
                        <ul className="hidden  md:flex space-x-8">
                            {navbar.map((item,index)=>(
                                <li key={index} className="hover:scale-105 duration-200 cursor-pointer text-lg hover:font-semibold ">
                                    <Link to={item.text} smooth={true} duration={500} offset={-70} activeClass="active">
                                        {item.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div onClick={()=>setMenu(!menu)} className="md:hidden">
                            {menu?<RxCross2 size={30} className="hover:text-red-500" />:<RiMenuLine size={30} className="hover:text-green-600"/>}
                        </div>
                    </div>
               </div>
               {menu && (
                    <div className="">
                      <ul className="md:hidden flex flex-col h-screen">
                         {
                            navbar.map((item,index)=>(
                                <li key={index} className="text-2xl font-semibold py-5 bg-white w-1/2"><Link onClick={()=>setMenu(!menu)} to={item.text} smooth={true} duration={500} offset={-70} activeClass="active">
                                {item.text}
                            </Link></li>
                            ))
                         }
                      </ul>
                    </div>
               )}
               
            </div>
        </>

        
    )
}
export default Navbar;