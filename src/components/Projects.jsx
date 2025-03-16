import React from 'react'
import incampusimg from "../assets/project_images/incampus.png"
import waste from "../assets/project_images/waste.png"
import sport from "../assets/project_images/sport.png"

function Projects() {
    return (
        <div
            name="projects"
            className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white projects"
        ><div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Projects
                    </p>
                </div>
                <div className="w-full flex flex-col md:flex-row flex-wrap justify-center gap-4 p-6">

                    <div className="w-full sm:w-[95%] md:w-[30%] lg:w-[28%] h-auto flex flex-col items-center justify-between p-4 bg-gray-900 shadow-lg rounded-lg border border-gray-500 ">
                        <h2 className="text-2xl font-bold text-white mb-2">InCampusFoods</h2>
                        <img
                            src={incampusimg}
                            alt="InCampusFoods"
                            className="w-full h-44 object-cover shadow-md mb-4 transition-transform duration-300 ease-in-out hover:scale-110 rounded-md"
                        />
                        <p className="text-gray-400 text-center px-4 mb-2">
                            An interactive web application to check, add to cart, and order food from various shops in the campus of NITW.
                        </p>
                        <p className="text-sm text-gray-400 font-medium text-center mb-4">
                            <span className="text-indigo-400">HTML</span>,
                            <span className="text-blue-400"> Bootstrap-Css</span>,
                            <span className="text-yellow-400"> React.Js</span>,
                            <span className="text-green-400"> Node.Js</span>,
                            <span className="text-red-400"> Express.Js</span>,
                            <span className="text-purple-400"> MongoDB-Cloud</span>
                        </p>
                        <div className="flex flex-row gap-3">
                            <a href="https://in-campus-frontend.vercel.app/" target="_blank" rel="noopener noreferrer"
                                className="px-4 py-2 text-white bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg shadow-md hover:scale-105 transition-all">
                                Demo
                            </a>
                            <a href="https://github.com/KOUSIKPAL33/InCampus" target="_blank" rel="noopener noreferrer"
                                className="px-4 py-2 text-white bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg shadow-md hover:scale-105 transition-all">
                                Github
                            </a>
                        </div>
                    </div>

                    <div className="w-full sm:w-[95%] md:w-[30%] lg:w-[28%] h-auto flex flex-col items-center justify-between p-4 bg-gray-900 shadow-lg rounded-lg border border-gray-500">
                        <h2 className="text-2xl font-bold text-white mb-2">Waste2Charity</h2>
                        <img
                            src={waste}
                            alt="Waste2Charity"
                            className="w-full h-44 object-cover shadow-md mb-4 transition-transform duration-300 ease-in-out hover:scale-110 rounded-md"
                        />
                        <p className="text-gray-400 text-center px-4 mb-2">
                            A web application to report waste, donate unwanted clothes, and share excess food on the NITW campus.
                        </p>
                        <p className="text-sm text-gray-400 font-medium text-center mb-4">
                            <span className="text-indigo-400">HTML</span>,
                            <span className="text-blue-400"> Bootstrap-Css</span>,
                            <span className="text-green-400"> JavaScript</span>,
                            <span className="text-yellow-400"> PHP</span>
                        </p>
                        <div className="flex flex-row gap-3">
                            <a href="#" target="_blank" rel="noopener noreferrer"
                                className="px-4 py-2 text-white bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg shadow-md hover:scale-105 transition-all">
                                Demo
                            </a>
                            <a href="https://github.com/KOUSIKPAL33/Waste2Charity" target="_blank" rel="noopener noreferrer"
                                className="px-4 py-2 text-white bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg shadow-md hover:scale-105 transition-all">
                                Github
                            </a>
                        </div>
                    </div>

                    <div className="w-full sm:w-[95%] md:w-[30%] lg:w-[28%] h-auto flex flex-col items-center justify-between p-4 bg-gray-900 shadow-lg rounded-lg border border-gray-500">
                        <h2 className="text-2xl font-bold text-white mb-2">SportCheck</h2>
                        <img
                            src={sport}
                            alt="SportCheck"
                            className="w-full h-44 object-cover shadow-md mb-4 transition-transform duration-300 ease-in-out hover:scale-110 rounded-md"
                        />
                        <p className="text-gray-400 text-center px-4 mb-2">
                            A frontend web app to check cricket scores, show point tables, image galleries, player stats, and more.
                        </p>
                        <p className="text-sm text-gray-400 font-medium text-center mb-4">
                            <span className="text-indigo-400">HTML</span>,
                            <span className="text-blue-400"> CSS</span>,
                            <span className="text-yellow-400"> JavaScript</span>
                        </p>
                        <div className="flex flex-row gap-3">
                            <a href="https://kousikpal33.github.io/Sportcheck/" target="_blank" rel="noopener noreferrer"
                                className="px-4 py-2 text-white bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg shadow-md hover:scale-105 transition-all">
                                Demo
                            </a>
                            <a href="https://github.com/KOUSIKPAL33/Sportcheck" target="_blank" rel="noopener noreferrer"
                                className="px-4 py-2 text-white bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg shadow-md hover:scale-105 transition-all">
                                Github
                            </a>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Projects
