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
            <div className="flex">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1 
                        variants={container(0)}
                        initial="hidden"
                        animate="visible" 
                        className=" font-thin tracking-tight lg:mt-8 lg:text-8xl sm:-ml-32 md:font-thin lg:ml-0">Senthil Kumar</motion.h1>
                        <motion.span
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible" 
                        className="text-white bg-clip-text text-4xl tracking-tight text-transparent sm:">Front-End Developer</motion.span>
                        <motion.p 
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                        className="my-2 max-w-xl py-6 font-light tracking-tighter lg:w-3/4">Enthusiastic IT graduate Dedicated Front-End Developer with a passion for creating interactive and
                        user-friendly web interfaces. Proficient in JavaScript, ReactJS, HTML, and CSS, with experience in
                        building responsive designs and dynamic applications. Adept at collaborating with teams to deliver
                        innovative solutions that enhance user experience.</motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8 -mt-10">
                    <div className="flex justify-center">
                        <motion.img 
                        initial={{x:0, opacity: 0}}
                        animate={{x:0, opacity: 1}}
                        transition={{duration: 1, delay: 1.2}}
                        src={myImg} alt="senthil kumar" height={550} width={500} className="rounded-2xl  sm:w-48 sm:h-52 sm:mt-20 lg:h-1/3 lg:w-2/4 lg:-mt-1"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Summary;