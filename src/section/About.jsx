import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
    const grid2Container = useRef();
    return (
        <section className="c-space section-spacing">
            <h2 className="text-heading">About Me</h2>
            <div 
            className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
                {/*Grid Item 1*/}
                <div className="flex items-end grid-default-color grid-1">
                    <img
                    src="/assets/coding-pov.png" 
                    className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]" />
                    <div className="z-10">
                        <p className="headtext">Hi, I'm Anjali</p>
                        <p className="subtext">Over the last 2+years I developed my backend and frontend skills to deliver scalable projects.</p>
                    </div>
                    <div className="absolute inset-x-0 pointer-events-none-bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo"/>
                </div>
                {/*Grid Item 2*/}
                <div className="grid-default-color grid-2">
                    <div ref={grid2Container} className="flex items-center justify-center w-full h-full">
                        <p className="flex items-end text-5xl text-gray-500">
                            CODE IS CRAFT
                        </p>
                        <Card style={{ rotate: "35deg", top:"40%", left: "30%"}} text="Designing" containerRef={grid2Container}/>
                        <Card style={{ rotate: "-30deg", top:"60%", left: "60%"}} text="Building" containerRef={grid2Container}/>
                        <Card style={{ rotate: "90deg", bottom:"30%", left: "10%"}} text="Grasp" containerRef={grid2Container}/>
                        <Card style={{ rotate: "-75deg", top:"30%", left: "-7%"}} text="Team player" containerRef={grid2Container}/>
                        <Card style={{ rotate: "20deg", top:"10%", left: "38%"}} text="Solid" containerRef={grid2Container}/>
                        <Card style={{ rotate: "30deg", top: "70%", left: "70%" }}image="assets/logos/csharp-pink.png" containerRef={grid2Container}/>
                        <Card style={{ rotate: "-45deg", top: "70%", left: "25%" }}image="assets/logos/dotnet-pink.png" containerRef={grid2Container}/>
                        <Card style={{ rotate: "-45deg", top: "5%", left: "10%" }}image="assets/logos/blazor-pink.png"containerRef={grid2Container}/>
                    </div>
                </div>
                {/*Grid Item 3*/}
                <div className="grid-black-color grid-3">
                    <div className="z-10 w-[50%]">
                        <p className="headtext">Time Zone</p>
                        <p className="subtext">
                            I'm based in India but I work with teams across the globe.
                        </p>
                    </div>
                    <figure className="absolute left-[30%] top-[10%]">
                        <Globe />
                    </figure>
                </div>
                {/*Grid Item 4*/}
                <div className="grid-special-color grid-4">
                    <div className="flex flex-col items-center justify-center gap-4 size-full">
                        <p className="text-center headtext">Do you wanna collaborate?</p>
                        <CopyEmailButton />


                    </div>
                </div>
                {/*Grid Item 5*/}
                <div className="grid-default-color grid-5">
                    <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
                        <Frameworks />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;