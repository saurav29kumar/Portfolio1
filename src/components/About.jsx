import React from "react";
function About() {
  return (
    <div name='About' className='w-full h-screen '>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Saurav Kumar, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p> A passionate Frontend Web Developer with a strong foundation in creating responsive and engaging user interfaces, currently deepening expertise in Data Structures and Algorithms (DSA). This journey is fueled by a love for coding and a relentless pursuit of learning, with a focus on solving complex problems.</p>  
            </div>
          </div>
      </div>
    </div>
  );
}
export default About;
