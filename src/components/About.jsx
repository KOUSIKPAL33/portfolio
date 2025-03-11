import React from "react";
import resume from "../assets/23MCF1R19_Kousik_Pal.pdf"

const About = () => {
    return (
        <div
            name="about"
            className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white about"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About
                    </p>
                </div>

                <p className="text-xl mt-5">
                    <b>M</b>y name is Kousik Pal. I am from Midnapore, West Bengal.
                    I am a student of NIT- Warangal. Currently,
                    I am studying Master of Computer Application(2023-2026)
                    which is offered by Department of Computer Science And
                    Engeneering.I have completed my graduation degree in B.Sc. Mathematics
                    from Midnapore College (Autonomous) with 8.63 CGPA.
                    I have qualified NIMCET-2023 with AIR-252.
                </p>

                <br />

                <p className="text-xl">
                    <b>I</b>'m a web developer with expertise in building responsive, user-friendly websites and web applications. I specialize in HTML, css, JavaScript, React, Node.js, etc. With a strong passion for clean code and seamless user experiences, I enjoy turning ideas into functional and visually appealing digital solutions.
                    <br /> <br />
                </p>
                <p className="text-xl">
                    <b>I</b>'m always eager to learn and keep up with the latest web technologies to build high-quality projects.
                </p>
                <br /> <br />
                <a href={resume} download={true} target="_blank">
                    <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                        Download Resume
                    </button>
                </a>
            </div>

        </div>
    );
};

export default About;