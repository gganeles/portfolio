import { motion } from "framer-motion";
import { GlassCard } from "./glass-card";

const listVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.07,
            delayChildren: 0.05,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};


const tagVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 6 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { type: "spring", stiffness: 260, damping: 20 },
    },
};

function SkillTag({ skill }: { skill: string }) {
    return (
        <motion.div
            variants={tagVariants}
            whileHover={{ scale: 1.05, y: -2 }}
            className="px-3 py-1 bg-muted/80 backdrop-blur-sm rounded-md text-sm border border-purple-500/10 shadow-sm"
        >
            {skill}
        </motion.div>
    );
}

export default function SkillCard(props: { skillName: string; skills: string[] }) {
    return (
        <GlassCard className="p-4">
            <h3 className="text-lg font-medium mb-3 text-center md:text-left flex items-center">
                {props.skillName}
            </h3>

            <motion.div
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-40px" }}
                className="flex flex-wrap gap-2 justify-center md:justify-start"
            >
                {props.skills.map((skill) => (
                    <SkillTag key={skill} skill={skill} />
                ))}
            </motion.div>
        </GlassCard>
    );
}
