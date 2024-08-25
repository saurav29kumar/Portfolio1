import React from "react";
import golf from "../../public/golf.png";
import portfolio from "../../public/portfolio.png";
import refocus from "../../public/refokus.png";
import calculator from "../../public/calculator.png";
import magmaUI from "../../public/magmaUI.png";
import sundown from "../../public/Sundown.png";
import duostudio from "../../public/duostudio.png";
function Portfolio(){
    const cardItem = [
        {
          logo: refocus,
          name: "Refokus‐UI‐Clone",
          para: 'Designed and implemented with HTML, CSS, JavaScript, Tailwind CSS and React JS.'
        },
        {
          logo: calculator,
          name: "Calculator",
          para:'Designed and implemented with HTML, CSS and JavaScript.'
        },
        {
          logo: magmaUI,
          name: "Clone Of magma.com",
          para:"Designed and implemented with HTML, CSS, canvas and JavaScript."
        },
        {
          logo: sundown,
          name: "Clone Of Sundown Studio",
          para:"Designed and implemented with HTML, CSS and JavaScript."
        },
        {
          logo: duostudio,
          name: "duo-studio-ui-clone",
          para:"Designed and implemented with HTML, CSS and JavaScript."
        },
        {
          logo: golf,
          name: "Golf community ui clone",
          para:"Designed and implemented with HTML, CSS and JavaScript."
        },
        {
          logo: portfolio,
          name: "My Portfolio website",
          para:"Designed and implemented with HTML, CSS ,JavaScript, Tailwind CSS and React JS."
        },
      ];
    return(
        <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className=" underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map((item,index) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300 overflow-hidden"
              key={index}
            >
              <img
                src={item.logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px] object-cover hover:w-[240px] hover:h-[240px] duration-300 "
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{item.name}</div>
                <p className="px-2 text-gray-700">
                  {item.para}
                </p>
              </div>
              <div className=" px-6 py-4 space-x-3 justify-around">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                  Video
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                  Source code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Portfolio;