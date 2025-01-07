import aboutImg from "../assets/senthil-std.jpg"
import {motion} from "framer-motion"

const About = () => {

    return(
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 justify-center text-4xl flex xs:-ml-16">About
                <span className="text-neutral-500">Me</span>
            </h1>
            <div className="lg:flex xs:block">
                <motion.div
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: -100}}
                transition={{duration: 1.5}}
                className="w-full lg:w-1/4  lg:p-8">
                    <div className="flex items-center justify-center ">
                        <img className="rounded-2xl h-2/4 w-2/4 lg:-mr-96 xs:-ml-16 sm:mt-20 lg:h-92 lg:w-96 lg:-mt-" src={aboutImg} alt="about"/>
                    </div>
                </motion.div>
                <motion.div
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: 100}}
                transition={{duration: 1.5}}
                className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6 -ml-20 xs:mt-10 xs:-ml-14 xs:w-60 lg:ml-72 lg:w-full lg:mt-24 ">I am a passionate and dedicated front-end developer with a strong foundation in web technologies, specializing in React.js, JavaScript, HTML, and CSS. I have a keen interest in creating responsive, user-friendly interfaces that deliver exceptional user experiences. My focus lies in building clean, efficient, and dynamic web applications with a strong emphasis on design consistency and performance.
                        My journey in front-end development began with a curiosity for how websites come to life, which has evolved into a deep passion for crafting engaging digital experiences. As a fresher, I am eager to contribute my skills to collaborative projects, learn from industry professionals, and solve design and development challenges creatively.</p>
                    </div>
                </motion.div>
            </div>
         </div>
    );
};

export default About;