import React from 'react'
import incampusimg from "../assets/project_images/incampus.png"

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
                <div class="flex flex-row gap-4 p-6 shadow-lg rounded-lg ">
                    <div class="w-32 h-32  flex-col items-center justify-center">
                        <h2>Name:InCampusFoods</h2>
                        <p>Descriptions: An interactive web application for reporting waste, donating unwanted clothes, and donating excess food on the campus of NITW</p>
                        <p>Tools & technologies used: HTML, Bootstrap-css, React.Js,Node.Js,Express.Js,MongoDB Cloud</p>
                        <img src={incampusimg} alt="" />
                        <button className=''>Demo</button>
                    </div>
                    <div class="w-32 h-32 bg-green-500 flex items-center justify-center text-white font-bold">
                    
                    </div>
                    <div class="w-32 h-32 bg-red-500 flex items-center justify-center text-white font-bold">
                        
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Projects
