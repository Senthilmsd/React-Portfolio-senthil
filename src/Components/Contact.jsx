import {motion} from "framer-motion"

const Contact =()=>{
    const contact = {
        Address : "House number-06, 74th block, CPWD Quarters kamarajar salai, k.k. nagar, chennai - 600078",
        PhoneNumber : "+91 7904183344",
        eMail : "senthilmsd2003@gmail.com"
    };
    return(
        <div className="border-b border-neutral-900 pb-20">
            <motion.h1
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: -100}}
            transition={{duration: 1.5}}
            className="my-10 text-center text-4xl sm:text-center">To Reach Me</motion.h1>
            <div className="text-center tracking-tighter">
            <motion.p
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 1.5}}
            className="my-4 sm:mx-32 sm:">{contact.Address}</motion.p>
            <motion.p
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: 100}}
            transition={{duration: 1.5}}
            className="my-4">{contact.PhoneNumber}</motion.p>
            <motion.a
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: 300}}
            transition={{duration: 1.5}}
            href="#" className="border-b text-white">{contact.eMail}</motion.a>
                
            </div>
        </div>
    )
}

export default Contact