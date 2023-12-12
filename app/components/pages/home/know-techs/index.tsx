'use client'

import { KnowTech } from "./know-tech"
import { SectionTitle } from "@/app/components/section-title"
import { KnownTech as IKnowTech } from "@/app/types/projects"
import { motion } from 'framer-motion'


type KnowTechProps = {
    techs: IKnowTech[]
}


export const KnowTechs = ({ techs }: KnowTechProps) => {
    return (
        <section className="container py-16">
            <SectionTitle subtitle="competências" title="Conhecimentos" />
            <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
                {techs?.map((tech, i) => (
                    <motion.div
                        initial={{opacity: 0, x: -100}}
                        whileInView={{opacity: 1, x: 0}}
                        exit={{opacity: 0, x: -100}}
                        transition={{duration: .2, delay: i * .1}}
                    >

                        <KnowTech key={tech.name} tech={tech} />
                    </motion.div>
                ))}
            </div>
        </section>
    )
}