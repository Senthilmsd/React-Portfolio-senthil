import { RiReactjsLine } from "react-icons/ri";
import { RiJavascriptLine } from "react-icons/ri";
import { RiHtml5Line } from "react-icons/ri";
import { RiCss3Line } from "react-icons/ri";
import { RiTailwindCssLine } from "react-icons/ri";
import { RiJavaLine } from "react-icons/ri";
import { RiDatabase2Line } from "react-icons/ri";
import {motion} from "framer-motion"

const iconVariants =(duration) =>({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    },
});

const Technology =() =>{
    return(
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: -100}}
            transition={{duration: 1.5}}
            className="text-center my-20 text-4xl xs:justify-center xs:-ml-20">Technologies</motion.h1>
            <motion.div
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 1.5}}
            className="flex flex-wrap items-center justify-center gap-4 sm:mr-20">
                <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl  border-neutral-800 border-solid p-2 xs:mx-16 xs:-ml-1">
                    <RiReactjsLine className="text-7xl text-cyan-400"/>
                </motion.div>
                <motion.div
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl  border-neutral-800 border-solid p-2 xs:mx-16 xs:-ml-1">
                    <RiJavascriptLine className="text-7xl text-yellow-300"/>
                </motion.div>
                <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate" 
                className="rounded-2xl  border-neutral-800 border-solid p-2 xs:mx-16 xs:-ml-1">
                    <RiHtml5Line className="text-7xl text-red-500"/>
                </motion.div>
                <motion.div
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl  border-neutral-800 border-solid p-2 xs:mx-16 xs:-ml-1">
                    <RiCss3Line className="text-7xl text-purple-500"/>
                </motion.div>
                <motion.div
                
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl  border-neutral-800 border-solid p-2 xs:mx-16 xs:-ml-1">
                    <RiTailwindCssLine className="text-7xl text-cyan-600"/>
                </motion.div>
                <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl  border-neutral-800 border-solid p-2 xs:mx-16 xs:-ml-1">
                    <RiJavaLine className="text-7xl text-red-800"/>
                </motion.div>
                <motion.div
                
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl  border-neutral-800 border-solid p-2 xs:mx-16 xs:-ml-1">
                    <RiDatabase2Line className="text-7xl text-green-700"/>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technology;