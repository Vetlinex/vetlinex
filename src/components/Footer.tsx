import Link from "next/link"
import { FaEnvelope, FaPhone, FaLocationArrow, FaTiktok, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import Image from "next/image"
export const Footer = () => {
  return (
    <footer className="flex flex-col bg-vetlinex text-primary-content p-10">
      <div className="footer footer-vertical footer-center">
        <aside>
        <Image src="/isotipo.png" width={80} height={80} alt="Picture of the author"/>
        <p className="text-lg">
          Vetlinex
          <br />
          Laboratorio Veterinario
        </p>
      </aside>
      <nav>
        <p className="text-2xl">Nuestras Redes</p>
        <div className="flex flex-row justify-center space-x-5">
          <Link href="https://www.tiktok.com/@laboratoriovetlinex?lang=es-419" target="_blank">
            <FaTiktok size={40}/>
          </Link>
          <Link href="https://www.facebook.com/Vetlinex?locale=es_LA" target="_blank">
            <FaFacebook size={40}/>
          </Link>
          <Link href="https://www.instagram.com/laboratoriovetlinex/" target="_blank">
            <FaInstagram size={40}/>
          </Link>
          <Link href="https://www.youtube.com/@LaboratorioVetlinex" target="_blank">
            <FaYoutube size={40}/>
          </Link>
        </div>
      </nav>
      <div>
        <h1 className="text-2xl">Contáctanos</h1>
        <h2 className="text-xl">Oficina Administrativa</h2>
        <div className="text-lg text-left space-y-2">
          <p>Atención 8:30 am a - 6:00pm</p>
          <div className="flex flex-row space-x-4 justify-center">
            <FaLocationArrow size="21"/>
            <p>Jr. Arequipa 3087, Lima 15106</p>
          </div>
          <div className="flex flex-row space-x-4 justify-center">
            <FaEnvelope size="21"/>
            <p>Ventas@vetlinex.com</p>
          </div>
          <div className="flex flex-row space-x-4 justify-center">
            <FaPhone size="21"/>
            <p>937 186 957</p>
          </div>
          
        </div>
      </div>
      <div>
        <h1 className="text-2xl">Información Corporativa</h1>
        <div className="text-lg flex flex-col space-x-2">
          <Link href="/">Nosotros</Link>
          <Link href="/productos">Productos</Link>
          <Link href="/">Catálogo Online</Link>
          <Link href="/">Curiosidades</Link>
        </div>
      </div>
      </div>
      <div className="justify-center text-center m-4 p-4">
        <p>Copyright © {new Date().getFullYear()} - Todos los derechos reservados - Desarrollado por Oswaldo Cáceda </p>
      </div>
    </footer>
  )
}