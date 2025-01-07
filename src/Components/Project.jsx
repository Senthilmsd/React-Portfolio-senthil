import project1 from '../assets/projects/project-img.png'
import project2 from '../assets/projects/project-portfolio.png'
import {motion} from "framer-motion"

const Project =()=>{

    const feTech = ['HTML', 'CSS', 'React.JS', 'Tailwind_CSS'];

    return(
        <div className="border-b bordeer-neutral-900 pb-4">
            <motion.h1
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: -100}}
            transition={{duration: 1.5}}
            className="my-20 text-center text-4xl xs:-ml-14">Projects</motion.h1>
            <div>
                
                <div className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: -100}}
                    transition={{duration: 1.5}}
                    className="w-full lg:w-1/4">
                        <img src={project2} alt="Project-2" width={150} height={150} className='mt-6 rounded xs:ml-20 '/>
                    </motion.div>
                    <motion.div
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: 100}}
                    transition={{duration: 1.5}}
                    className="w-full max-w-xl lg:w-4/4">
                        <h4 className='mb-2 font-semibold xs:ml-2'>Portfolio</h4>
                        <p className='mb-4 text-neutral-400 xs:w-72 xs:ml-2'>Designed a website that merges educational platforms for learning programming
                        and technical skills with a focus on providing professional yet creative user interfaces.
                        </p>
                        {feTech.map((value)=>(
                            <span key={value} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">{value}</span>

                        ))}
                    </motion.div>
                </div>
                <div className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: -100}}
                    transition={{duration: 1.5}}
                    className="w-full lg:w-1/4">
                        <img src={project1} alt="Project-1" width={150} height={150} className='mt-6 rounded xs:ml-20'/>
                    </motion.div>
                    <motion.div
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: 100}}
                    transition={{duration: 1.5}}
                    className="w-full max-w-xl lg:w-4/4">
                        <h4 className='mb-2 font-semibold  xs:ml-2'>Bus Ticket booking system</h4>
                        <p className='mb-4 text-neutral-400 xs:w-72 xs:ml-2'>Developed a Java-based bus booking system leveraging loops and conditional statements. Built a userfriendly interface and functional logic for managing bookings.
                        </p>
                        <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">JAVA</span>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Project