'use client'

import Image from "next/image"
import { TechBadge } from "../../../tech-badge"
import { Button } from "../../../button"
import { HiArrowNarrowRight } from 'react-icons/hi'
import { HomePageInfo } from "@/app/types/page-info"
import { RichText } from "@/app/components/rich-text"
import { CMSIcon } from "@/app/components/cms-icon"
import { motion } from 'framer-motion'
import { techBadAnimation } from "@/app/lib/animations"


type HeroSectionProps = {
    homeInfo: HomePageInfo
}

export const HeroSection = ({ homeInfo }: HeroSectionProps) => {

    const handleContact = () => {
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    }


    return (
        <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb=[110px]">
            <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
                <motion.div
                    className="w-full lg:max-w-[530px]"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: .5 }}
                >
                    <p className="font-mono text-emerald-400">Olá, meu nome é </p>
                    <h2 className="text-4xl font-medium mt-2">Lucas Alencar</h2>

                    <div className="text-gray-400 my-6 text-sm sm:text-base">
                        <RichText content={homeInfo.introduction.raw} />
                    </div>
                    <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
                        {homeInfo.technologies.map((tech, index) => (
                            <TechBadge
                                key={`tech-${tech.name}`}
                                name={tech.name}
                                {...techBadAnimation}
                                transition={{ duration: .2, delay: index * .1 }}
                            />
                        ))}
                    </div>
                    <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
                        <Button onClick={handleContact} className="w-max shadow-button ">
                            Entre em contato
                            <HiArrowNarrowRight size={18} />
                        </Button>

                        <div className="text-gray-600 text-2xl flex items-center h-20 gap-3">
                            {homeInfo.socials.map((contact, index) => (
                                <a
                                    className="hover:text-gray-100 transition-colors"
                                    href={contact.url}
                                    key={`contact_${index}`}
                                    target="_blank"
                                >
                                    <CMSIcon icon={contact.iconSvg} />
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 200, scale: .5 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 200, scale: .5 }}
                    transition={{ duration: .5}}
                    className="origin-center"
                >
                    <Image
                        width={420}
                        height={404}
                        src={homeInfo.profilePicture.url}
                        alt="Foto de perfil do Lucas"
                        className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
                        unoptimized
                    />
                </motion.div>
            </div>
        </section>
    )
}