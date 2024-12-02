import { RiReactjsLine } from "react-icons/ri"
import { TbBrandNextjs } from "react-icons/tb"
import { TbBrandDjango } from "react-icons/tb"
import { SiTensorflow } from "react-icons/si"
import { SiNumpy } from "react-icons/si"
import { SiPlotly } from "react-icons/si"
import { SiScikitlearn } from "react-icons/si"
import { SiScipy } from "react-icons/si"
import { SiPandas } from "react-icons/si"
import { DiPython } from "react-icons/di"
import { FaNodeJs } from "react-icons/fa6"
import { SiCisco } from "react-icons/si"
import { SiMysql } from "react-icons/si"
import { BiLogoPostgresql } from "react-icons/bi"
import { motion } from "framer-motion"
import { Variants } from "framer-motion"

const iconVariants = (duration: number): Variants => ({
    initial: { y: 10 },
    animate: {
        y: [10, -10],
        transition: { duration: duration, ease: "linear", repeat: Infinity, repeatType: "mirror" },
    },
});

const Technology = () => {
  return (
    <div id="technologies" className="border-b border-neutral-800 pd-24 pb-20">
        <motion.h1 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.5 }} className="my-20 text-center text-4xl">Technologies</motion.h1>
        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.5 }} className="flex flex-wrap items-center justify-center gap-4">
            <motion.div variants={iconVariants(1)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"></RiReactjsLine>
            </motion.div>
            <motion.div variants={iconVariants(9.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandDjango className="text-7xl text-green-950"></TbBrandDjango>
            </motion.div>
            <motion.div variants={iconVariants(9)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiTensorflow className="text-7xl text-orange-600"></SiTensorflow>
            </motion.div>
            <motion.div variants={iconVariants(1.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiNumpy className="text-7xl text-white"></SiNumpy>
            </motion.div>
            <motion.div variants={iconVariants(8.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiPlotly className="text-7xl text-cyan-950"></SiPlotly>
            </motion.div>
            <motion.div variants={iconVariants(7.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiScikitlearn className="text-7xl text-cyan-100"></SiScikitlearn>
            </motion.div>
            <motion.div variants={iconVariants(5.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiScipy className="text-7xl text-blue-600"></SiScipy>
            </motion.div>
            <motion.div variants={iconVariants(6.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiPandas className="text-7xl text-blue-950"></SiPandas>
            </motion.div>
            <motion.div variants={iconVariants(4.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiPython className="text-7xl text-blue-900"></DiPython>
            </motion.div>
            <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiCisco className="text-7xl text-cyan-400"></SiCisco>
            </motion.div>
            <motion.div variants={iconVariants(8)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMysql className="text-7xl text-cyan-950"></SiMysql>
            </motion.div>
            <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandNextjs className="text-7xl text-cyan-50"></TbBrandNextjs>
            </motion.div>
            <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-7xl text-green-500"></FaNodeJs>
            </motion.div>
            <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoPostgresql className="text-7xl text-sky-700"></BiLogoPostgresql>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technology