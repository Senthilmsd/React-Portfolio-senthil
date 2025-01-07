import {motion} from "framer-motion"

const Internship =() => {
    const Intern = ["HTML", "CSS", "Tailwind.css", "JavaScript", "React.JS"]
    return(
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: -100}}
            transition={{duration: 1.5}}
            className="my-20 text-center text-4xl">Internship</motion.h1>
            <div className="">
                <div className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: -100}}
                    transition={{duration: 1.5}}
                    className="w- lg:w-1/4">
                        <p>2024 - July to November</p>
                    </motion.div>
                    <motion.div
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: 100}}
                    transition={{duration: 1.5}}
                    className="w-full max-w-xl lg:w-3/4">
                        <h3 className="mb-2 font-semibold">Frontend Developer -
                            <span className="text-sm text-purple-100 pl-2">Besant Technology</span>
                        </h3>
                        <p className="mb-4 text-neutral-400">As a Front-End Developer Intern, your role involves designing and developing engaging user interfaces
                                                                for web applications. You work with technologies such as HTML, CSS, JavaScript, and frameworks like
                                                                ReactJS to create responsive and visually appealing designs. - JUL to NOV 2024</p>
                        {Intern.map((value) =>(
                            <span key={value} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">{value}</span>
                        ))}
                        
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Internship;  