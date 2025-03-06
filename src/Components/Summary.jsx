import myImg from "../assets/senthil_img.jpg";
import { motion } from "framer-motion";

const container =(delay)=>({
    hidden:{x: -100, opacity: 0},
    visible:{
        x:0,
        opacity:1,
        transition:{duration :0.5, delay: delay},
    }
})

const Summary =() =>{
    return(
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="lg:flex xs:block">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1 
                        variants={container(0)}
                        initial="hidden"
                        animate="visible" 
                        className=" font-thin tracking-tight lg:mt-8 lg:text-8xl xs:justify-center xs:-ml-14 xs:font-thin lg:ml-0">Senthil Kumar</motion.h1>
                        <motion.span
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible" 
                        className="text-white bg-clip-text text-4xl tracking-tight text-transparent xs:-ml-14 lg:ml-0">Front-End Developer</motion.span>
                        <motion.p 
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                        className="my-2 max-w-xl py-6 font-light tracking-tighter lg:w-3/4 xs:-ml-12 xs:w-80 lg:ml-0">Enthusiastic IT graduate Dedicated Front-End Developer with a passion for creating interactive and
                        user-friendly web interfaces. Proficient in JavaScript, ReactJS, HTML, and CSS, with experience in
                        building responsive designs and dynamic applications. Adept at collaborating with teams to deliver
                        innovative solutions that enhance user experience.</motion.p>
                    </div>
                    <div className="inline-block lg:px-6 lg:py-3 bg-white text-black lg:text-lg font-medium rounded-md shadow-md border border-gray-400 hover:bg-gray-200 transition duration-300 no-underline xs:p-2 xs:mb-3 xs:align-center xs:ml-28">
                        <a href="https://drive.google.com/drive/folders/1DZhWi_ax_eAhWRE_c1c7zFZjwX2m_Zlc?mcp_token=eyJwaWQiOjgyMjU2OSwic2lkIjo3OTM2Mjg5MzUsImF4IjoiMzZlOTQ0NTEwMzQwYTQyYTY2YzI2NDNhMmY4YmY4ZDkiLCJ0cyI6MTczNzk2MjI1NCwiZXhwIjoxNzQwMzgxNDU0fQ.z7sshMs7vwcXxiX73Dt7N3ADKu-U9WtIIIn8DVlTiQM">Resume</a>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8 -mt-10 xs:-ml-7">
                    <div className="flex justify-center">
                        <motion.img 
                        initial={{x:0, opacity: 0}}
                        animate={{x:0, opacity: 1}}
                        transition={{duration: 1, delay: 1.2}}
                        src={myImg} alt="senthil kumar" height={550} width={500} className="rounded-2xl xs:w-56 xs:h-64 xs:mt-10 lg:h-1/3 lg:w-2/4 lg:-mt-1"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Summary;