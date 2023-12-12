import { SectionTitle } from "@/app/components/section-title"
import { ExperienceItem } from "./experience-item"
import { WorkExperience as IWorkExperience } from "@/app/types/work-experience"

type WorkExperienceProps = {
    experiences: IWorkExperience[]
}

export const WorkExperience = ({ experiences }: WorkExperienceProps) => {
    return (
        <section className="container py-16 flex gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row">
            <div className="max-w-[420px]">
                <SectionTitle subtitle="experiências" title="Experiência Profissional" />
                <p className="text-gray-400 mt-6">
                Manter-me aberto a novas oportunidades e desafios no meu percurso profissional é crucial para meu contínuo crescimento. Essa mentalidade não só me torna mais flexível e adaptável às mudanças no mercado de trabalho, mas também promove um aprendizado constante. 
                </p>
            </div>
            <div className="flex flex-col gap-4">
                {experiences?.map(experience => (
                    <ExperienceItem key={experience.companyName} experience={experience}/>
                ))}
            </div>
        </section>
    )
}