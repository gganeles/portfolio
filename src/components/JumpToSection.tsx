import { GlassCard } from "./ui/glass-card"
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import MotionWrapper from "./MotionWrapper";

export default function JumpToSection({ ...props }) {
    const sections = [
        "projects",
        "experience",
        "skills",
        "awards",
        "education"
    ]

      const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

    return (
        <div className="md:hidden">
            <div className="p-6 flex flex-col items-center">
                <MotionWrapper>
                    {/* <motion.div
                        className="flex flex-col md:flex-row md:items-center justify-between mb-8"
                        initial="hidden"
                        animate="visible"
                        variants={{hidden:{opacity:0, y:0}}}
                    > */}
                    <GlassCard
                        hoverEffect={false}
                        className="p-4 flex flex-col w-108 gap-2 border-blue-500/10 bg-gradient-to-r from-blue-500/5 to-cyan-500/5">
                        <h3 className="text-lg font-semibold mb-2 text-center text-blue-500">Jump to Section</h3>
                        <div >
                            <motion.div
                                className="flex flex-col gap-2 items-center"
                                variants={containerVariants}
                            >
                                {sections.map((el, i) => (
                                    <motion.a
                                        variants={childVariants}
                                        key={el}
                                        href={`#${el}`}
                                        className="w-96 px-4 py-2 rounded-md bg-muted/80 text-muted-foreground hover:bg-blue-500/10 hover:text-blue-500 transition-colors font-medium text-center border border-blue-500/10 shadow-sm"
                                        whileHover={{ scale: 1.02 , y:-1 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {el.charAt(0).toUpperCase() + el.slice(1)}
                                    </motion.a>
                                ))}
                            </motion.div>
                        </div>
                    </GlassCard>
                    {/* </motion.div> */}
                </MotionWrapper>
            </div>
        </div>
    )
}