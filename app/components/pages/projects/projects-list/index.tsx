'use client'

import Link from "next/link"
import { ProjectCard } from "./project-card"
import { Project } from "@/app/types/projects"
import { motion } from 'framer-motion'
import { fadeUpAnimation } from "@/app/lib/animations"

type ProjectsListProps = {
    projects: Project[]
}

export const ProjectsList = ({ projects }: ProjectsListProps) => {
    return (
        <section className="container p-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
            {projects.map((project, i) => (
                <Link key={project.title} href={`/projects/${project.slug}`}>
                    <motion.div
                        {...fadeUpAnimation}
                        transition={{ duration: .5, delay: i * .1 }}
                    >
                        <Link href={`/projects/${project.slug}`}>
                            <ProjectCard project={project} />
                        </Link>
                    </motion.div>
                </Link>
            ))}

        </section>
    )
}