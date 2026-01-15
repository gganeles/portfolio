import { workExperience } from "@/lib/data";
import TimelineItem from "./TimelineItem";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";

export default function ExperienceSection() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="experience"
      className="py-12 bg-gradient-to-b to-muted/20 from-background"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left flex items-center md:inline-block">
            <motion.span
              className="inline-block mr-2"
              initial={{ rotate: 0 }}
              whileInView={{ rotate: [0, -10, 10, -5, 5, 0] }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Briefcase className="h-6 w-6" />
            </motion.span>{" "}
            Experience
          </h2>
        </MotionWrapper>
        <div className="mb-8">
          {workExperience.map((job, index) => (
            <TimelineItem
              key={job.company + job.period}
              title={`${job.position} | ${job.company}`}
              subtitle={`${job.location}`}
              date={`${job.period}`}
              isLast={index === workExperience.length - 1}
              //index={index}
            >
              <motion.div
                className="mt-3 p-4 bg-background/80 backdrop-blur-sm backdrop-filter rounded-lg border border-blue-500/20 dark:bg-card/10 dark:border-blue-500/10 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.ul
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="list-disc ml-4 space-y-2 text-sm">
                  {job.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      variants={childVariants}
                      className="text-muted-foreground relative pl-6"
                      viewport={{ once: true }}
                    >
                      {achievement}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </TimelineItem>
          ))}
        </div>
      </div>
    </section>
  );
}
