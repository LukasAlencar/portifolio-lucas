import { Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import { Header } from './components/header'
import { ContactForm } from './components/contact-form'
import { Footer } from './components/footer'
import { BackToTop } from './components/back-to-top'
import { Toaster } from './components/toaster'

export const metadata = {
  title: {
    default: 'Home',
    template: '%s | LK'
  },
  description: 'Sou um apaixonado desenvolvedor front-end com um histórico comprovado de criar experiências web extraordinárias. Meu portfólio reflete meu compromisso com a inovação, usabilidade e design responsivo. Explore uma coleção diversificada de projetos que abrangem desde websites corporativos elegantes até aplicações web interativas.',
  openGraph: {
    title: 'Portfolio Lucas Alencar',
    description: 'Venha ver um pouco sobre mim, também sobre os meus conhecimentos e projetos!',
    url: 'https://www.lucasalencar.cloud',
    siteName: 'Lucas Alencar',
    images: [{
      url: '/images/zOG-IMG.png',
      width: 1800,
      height: 1600,
      alt: 'Thumbnail Portfolio'
    }],
    locale: 'pt-BR',
    type: 'website',
  },
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plexMono.variable}`}>
      <body>
        <Toaster/>
        <BackToTop/>
        <Header/>
        {children}
        <ContactForm/>
        <Footer/>
      </body>
    </html>
  )
}
