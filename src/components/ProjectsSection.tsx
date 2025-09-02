import React, { useState } from "react";
import { projects } from "@/lib/data";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ChevronDown, ChevronUp, Github, Link } from "lucide-react";
import { GlassCard } from "./ui/glass-card";
import MotionWrapper from "./MotionWrapper";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import ProjectVideo from "./ui/ProjectVideo";

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(-1)

  const playVideo = (e: React.MouseEvent<HTMLDivElement>) => {
    const videoRef = e.currentTarget.parentElement?.querySelector("video");
    videoRef?.play();
  }

  return (
    <section id="projects" className="py-12 relative">
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            Projects
          </h2>
        </MotionWrapper>

        <div className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <MotionWrapper key={project.title} delay={index * 0.2}>
              <GlassCard className="group overflow-hidden dark:border-blue-500/10 h-full flex flex-col sm:flex-row">
                <div className="flex flex-col w-full">
                  <CardHeader className="bg-gradient-to-r from-blue-500/5 to-cyan-500/5">
                    <CardTitle className="text-center md:text-left group-hover:text-blue-500 transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="list-disc ml-4 space-y-1 text-sm pt-3 transition-all duration-300">
                      {project.description.map((desc, i) => (
                        <motion.li
                          key={i}
                          className="text-muted-foreground"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          {desc}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="flex flex-col justify-center md:justify-start items-center border-t border-border/30 bg-gradient-to-r from-blue-500/5 to-cyan-500/5">
                    <motion.a
                      className="flex items-center text-sm text-muted-foreground cursor-pointer hover:text-blue-500 transition-colors group/link pt-4"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.try}
                    >
                      <div>Try It Yourself</div> <Link className="p-1" />
                    </motion.a>
                    {project.github && (
                    <motion.a
                      className="flex items-center text-sm text-muted-foreground cursor-pointer hover:text-blue-500 transition-colors group/link pt-0.5"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                    >
                      <div>View on GitHub</div> <Github className="p-1" />
                    </motion.a>)}
                  </CardFooter>
                </div>
                <div className="sm:h-120 flex-none">
                  <ProjectVideo src={project.video} poster={project.poster} />
                </div>
              </GlassCard>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}