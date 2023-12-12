'use client'

import { Link } from "@/app/components/link"
import { TechBadge } from "@/app/components/tech-badge"
import { Project } from "@/app/types/projects"
import Image from "next/image"
import { HiArrowNarrowRight } from "react-icons/hi"
import { motion } from 'framer-motion'
import { fadeUpAnimation, techBadAnimation } from "@/app/lib/animations"


type ProjectCardProps = {
    project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {

    return (
        <motion.div className="flex gap-6 lg:gap-12 flex-col lg:flex-row"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: .5 }}
        >
            <motion.div
                initial={{ opacity: 0, y: 100, scale: .5 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 100, scale: .5 }}
                transition={{ duration: .3, delay: .3 }}
                className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full">
                <Image
                    width={420}
                    height={304}
                    alt={`Thumbnail ${project.title}`}
                    src={project.thumbnail.url}
                    className="w-full h-full object-cover rounded-lg"
                />
            </motion.div>
            <div className="flex-1 lg:py-[18px]">
                <motion.h3
                    {...fadeUpAnimation}
                    transition={{ duration: .7 }}
                    className="flex items-center gap-3 font-medium text-lg text-gray-50"
                >
                    <Image
                        width={20}
                        height={20}
                        alt=""
                        src={'/images/icons/project-title-icon.svg'}

                    />
                    {project.title}
                </motion.h3>
                <motion.p
                    {...fadeUpAnimation}
                    transition={{ duration: .2, delay: .3 }}
                    className="text-gray-400 my-6"
                >
                    {project.shortDescription}
                </motion.p>

                <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
                    {project.technologies?.map((tech, i) => (
                        <TechBadge
                            {...techBadAnimation}
                            transition={{ duration: .2, delay: .5 * i * .1 }}
                            key={`${project.title}-${tech.name}`}
                            name={tech.name}
                        />
                    ))}

                </div>

                <Link href={`/projects/${project.slug}`}>
                    Ver projeto
                    <HiArrowNarrowRight />
                </Link>
            </div>
        </motion.div>
    )
}