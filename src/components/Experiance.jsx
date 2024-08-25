import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import reactjs from "../../public/reactjs.png"
import TailwindCSS from "../../public/TailwindCSS.jpeg";
import MySQL from "../../public/MySQL.jpeg";
import cpp from "../../public/cpp.png";
import Github from "../../public/Github.jpeg";
import c from "../../public/c.jpeg";

function Experiance() {
  const cardItem = [
    {
      logo: java,
      name: "Java",
    },
    {
      logo: html,
      name: "HTML",
    },
    {
      logo: css,
      name: "CSS",
    },
    {
      logo: javascript,
      name: "JavaScript",
    },
    {
      logo: reactjs,
      name: "React JS",
    },
    {
      logo: TailwindCSS,
      name: "Tailwind CSS",
    },
    {
      logo: MySQL,
      name: "MySQL",
    },
    {
        logo: Github,
        name: "Github",
    },
    {
        logo: c,
        name: "C",
    },
    {
        logo: cpp,
        name: "C++",
      },
  ];
  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experiance</h1>
        <p className="  ">
        Over the past two years, I've been focusing on learning and improving these skills.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map((item,index) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={index}
            >
              <img src={item.logo} className="w-[150px] h-[145px] rounded-full object-fit overflow-hidden" alt="" />
              <div>
                <div className="font-semibold">{item.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;