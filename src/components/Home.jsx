import React from "react";
import myphoto from "../assets/my_photo.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 home  pt-20"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row gap-10">
        <div className="small-screen hidden">
          <div className="relative inline-flex h-screeen overflow-hidden rounded-full p-[10px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-48 w-48 cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              <img
                src={myphoto}
                alt="profile"
              />
            </span>
          </div>

        </div>
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-2xl sm:text-4xl font-bold text-white">Hello It's Me </h2>

          <h1 className="text-4xl sm:text-7xl text-white font-bold">Kousik Pal</h1>

          <h2 className="text-white text-2xl sm:text-3xl font-bold">And I'm a <span className="text-blue-500">Full Stack Developer</span></h2>

          <p className="text-gray-500 py-4 max-w-md">
            I have 2 years of experience building websites and desgining software.
            I love to work on web application using technologies like
            React.js, Node.js, Tailwind etc.
          </p>

          <div className="projects-btn">
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="big-screen ">
          <div className="relative inline-flex h-screeen overflow-hidden rounded-full p-[10px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-96 cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              <img
                src={myphoto}
                alt="profile"
              />
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
