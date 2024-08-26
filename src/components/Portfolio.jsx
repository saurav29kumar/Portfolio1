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
          para: 'Designed and implemented with HTML, CSS, JavaScript, Tailwind CSS and React JS.',
          vlink: "https://basic-calculator-uhpm.vercel.app/",
          slink: "https://github.com/saurav29kumar/refokusuiclone2"
        },
        {
          logo: calculator,
          name: "Calculator",
          para:'Designed and implemented with HTML, CSS and JavaScript.',
          vlink: "https://basic-calculator-five-lac.vercel.app/",
          slink: "https://github.com/saurav29kumar/Basic-Calculator"
        },
        {
          logo: magmaUI,
          name: "Clone Of magma.com",
          para:"Designed and implemented with HTML, CSS, canvas and JavaScript.",
          vlink: "https://magma-ui-clone.vercel.app/",
          slink: "https://github.com/saurav29kumar/magmaUIclone"
        },
        {
          logo: sundown,
          name: "Clone Of Sundown Studio",
          para:"Designed and implemented with HTML, CSS and JavaScript.",
          vlink: "https://sundown-u-istudios.vercel.app/",
          slink: "https://github.com/saurav29kumar/SundownUIstudio"
        },
        {
          logo: duostudio,
          name: "duo-studio-ui-clone",
          para:"Designed and implemented with HTML, CSS and JavaScript.",
          vlink: "https://duo-studio-clone-tau.vercel.app/",
          slink: "https://github.com/saurav29kumar/duoStudioClone"
        },
        {
          logo: golf,
          name: "Golf community ui clone",
          para:"Designed and implemented with HTML, CSS and JavaScript.",
          vlink: "https://golfcommunity.vercel.app/",
          slink: "https://github.com/saurav29kumar/golfcommunity"
        },
        {
          logo: portfolio,
          name: "My Portfolio website",
          para:"Designed and implemented with HTML, CSS ,JavaScript, Tailwind CSS and React JS.",
          vlink: "https://portfolio1-gb3p.vercel.app/",
          slink: "https://github.com/saurav29kumar/Portfolio1"
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
                <a href={item.vlink} target="_blank" rel="noopener noreferrer">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                    Video
                  </button>
                </a>
                <a href={item.slink} target="_blank" rel="noopener noreferrer">
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                    Source code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Portfolio;