import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaSquareGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
function Fotter(){
    return(
        <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/saurav29kumar/" target="_blank">
                <BsLinkedin size={24}  />
              </a>
              <a href="https://github.com/saurav29kumar" target="_blank">
                <FaSquareGithub size={24} />
              </a>
              <a href="https://leetcode.com/u/sauravkushwaha2001/" target="_blank">
                <SiLeetcode size={24} />
              </a>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              
              <p className="text-sm">© 2024 Saurav Kumar. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
    )
}
export default Fotter;