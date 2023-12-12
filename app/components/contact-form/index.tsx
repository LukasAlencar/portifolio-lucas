'use client'

import { HiArrowNarrowRight } from "react-icons/hi"
import { Button } from "../button"
import { SectionTitle } from "../section-title"
import { useForm } from 'react-hook-form'
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import axios from "axios"
import { toast } from "react-hot-toast"
import { motion } from "framer-motion"
import { fadeUpAnimation } from "@/app/lib/animations"

const contactFormSchema = z.object({
    name: z.string().min(3).max(100),
    email: z.string().email(),
    message: z.string().min(1).max(500)
})

type ContactFormData = z.infer<typeof contactFormSchema>

export const ContactForm = () =>{

    const {handleSubmit, register, reset, formState: { isSubmitting }} = useForm<ContactFormData>({resolver: zodResolver(contactFormSchema)})

    const onSubmit = async (data: ContactFormData) =>{
        try{
            await axios.post('/api/contact', data)
            toast.success('Mensagem enviada com sucesso!')
            reset()
        }catch{
            toast.error('Ocorreu um erro! Tente novamente mais tarde')
        }
    }

    return (
        <section id="contact" className="py-16 px-6 md:py-32 flex items-center justify-center bg-gray-950">
            <div className="w-full max-w-[420px] mx-auto">
                <SectionTitle 
                    subtitle="contato" 
                    title="Vamos Trabalhar Juntos? Entre em contato"
                    className="items-center text-center"
                />
                <motion.form 
                    {...fadeUpAnimation}
                    transition={{duration: .5}}
                    className="mt-12 w-full flex flex-col gap-4"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <input 
                        type="text" 
                        placeholder="Nome"
                        className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600 "    
                        {...register("name")}
                    />
                    <input 
                        type="email" 
                        placeholder="E-mail"
                        className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600 "    
                        {...register("email")}

                    />
                    <textarea
                        placeholder="Mensagem"
                        className="resize-none w-full h-[138px] bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600 "    
                        maxLength={500}
                        {...register("message")}
                            
                    />
                    <Button disabled={isSubmitting} className="mt-6 shadow-button">
                        Enviar mensagem
                        <HiArrowNarrowRight size={18}/>
                    </Button>
                </motion.form>
            </div>      
        </section>
    )
}