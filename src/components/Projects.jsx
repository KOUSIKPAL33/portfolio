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
                <div class="w-full flex flex-row gap-10 p-6 shadow-lg rounded-lg ">
                    <div className="w-1/3 h-full flex flex-col items-center justify-center p-3 bg-black-500 shadow-lg rounded-lg border border-gray-200">
                        <h2 className="text-2xl font-bold text-white-700 mb-2">InCampusFoods</h2>
                        <img
                            src={incampusimg}
                            alt="InCampusFoods"
                            className="w-full h-48 object-cover shadow-md mb-4 transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                        <p className="text-white-600 text-center px-4 mb-2">
                            An interactive web application to check ,add to cart, order food from various shops in the campus of NITW.
                        </p>
                        <p className="text-sm text-gray-500 font-medium text-center mb-2">
                            <span className="text-indigo-500">HTML</span>,
                            <span className="text-blue-500"> Bootstrap-Css</span>,
                            <span className="text-yellow-500"> React.Js</span>,
                            <span className="text-green-500"> Node.Js</span>,
                            <span className="text-red-500"> Express.Js</span>,
                            <span className="text-purple-500"> MongoDB-Cloud</span>
                        </p>
                        <div className="flex flex-row justify-between w-full">
                            <button className="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                                <a href='https://in-campus-frontend.vercel.app/'
                                    target='_blank'
                                    className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                                    Demo
                                </a>
                            </button>
                            <button className="relative inline-flex items-center justify-center p-0.5  me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                                <a href='https://github.com/KOUSIKPAL33/InCampus'
                                    target='_blank'
                                    className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                                    Github
                                </a>
                            </button>
                        </div>
                    </div>
                    <div className="w-1/3 h-full flex flex-col items-center justify-center p-3 bg-black-500 shadow-lg rounded-lg border border-gray-200">
                        <h2 className="text-2xl font-bold text-white-700 mb-2">Waste2Charity</h2>
                        <img
                            src={waste}
                            alt="Waste2Charity"
                            className="w-full h-48 object-cover shadow-md mb-4 transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                        <p className="text-white-600 text-center px-4 mb-2">
                            An interactive web application to report waste, donate unwanted clothes excess food on the campus of NITW.
                        </p>
                        <p className="text-sm text-gray-500 font-medium text-center mb-2">
                            <span className="text-indigo-500">HTML</span>,
                            <span className="text-blue-500"> Bootstrap-Css</span>,
                            <span className="text-green-500"> JavaScript</span>,
                            <span className="text-yellow-500"> Php</span>,
                        </p>
                        <div className="flex flex-row justify-between w-full">
                            <button className="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                                <a href='#'
                                    target='_blank'
                                    className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                                    Demo
                                </a>
                            </button>
                            <button className="relative inline-flex items-center justify-center p-0.5  me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                                <a href='https://github.com/KOUSIKPAL33/Waste2Charity'
                                    target='_blank'
                                    className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                                    Github
                                </a>
                            </button>
                        </div>
                    </div>
                    <div className="w-1/3 h-full flex flex-col items-center justify-center p-3 bg-black-500 shadow-lg rounded-lg border border-gray-200">
                        <h2 className="text-2xl font-bold text-white-700 mb-2">SportCheck</h2>
                        <img
                            src={sport}
                            alt="SportCheck"
                            className="w-full h-48 object-cover shadow-md mb-4 transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                        <p className="text-white-600 text-center px-4 mb-2">
                            A frontend web application to check cricket score,show point table,image gallery,stats of a player etc.
                        </p>
                        <p className="text-sm text-gray-500 font-medium text-center mb-2 ">
                            <span className="text-indigo-500">HTML</span>,
                            <span className="text-blue-500"> Css</span>,
                            <span className="text-yellow-500"> JavaSript</span>,

                        </p>
                        <div className="flex flex-row justify-between w-full">
                            <button className="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                                <a href='https://kousikpal33.github.io/Sportcheck/'
                                    target='_blank'
                                    className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                                    Demo
                                </a>
                            </button>
                            <button className="relative inline-flex items-center justify-center p-0.5  me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                                <a href='https://github.com/KOUSIKPAL33/Sportcheck'
                                    target='_blank'
                                    className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                                    Github
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
