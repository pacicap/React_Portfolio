import { HERO_CONTENT } from "../constants"
import profilePic from "C:/Users/aband/OneDrive/Desktop/React-portfolio/src/assets/PaciliaProfileN.jpg"
import { motion } from "framer-motion"

const container = (delay: any) => ({
    hidden: { x: -100, opacity: 1 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-10 lg:mb-35 pt-20">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 variants={container(0)} initial="hidden" animate="visible" className="pb-12 text-4xl font-thin tracking-tight lg:mt-16 lg:text-7xl pl-12">
                        Pacilia C. Abanda
                    </motion.h1>
                    <motion.span variants={container(0.5)} initial="hidden" animate="visible" className="bg-gradient-to-r from-yellow-300 via-amber-500 to-amber-800 bg-clip-text text-2xl tracking-tight text-transparent pl-12 pb-10">
                        AI Master Student & Computer Engineer
                    </motion.span>
                    <motion.p variants={container(1)} initial="hidden" animate="visible" className="my-2 max-w-xl py-6 font-light text-sm tracking-tighter text-center">
                        {HERO_CONTENT}
                    </motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1}} transition={{ duration:1, delay: 1.2 }} src={profilePic} alt="Pacilia Abanda"></motion.img>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Hero