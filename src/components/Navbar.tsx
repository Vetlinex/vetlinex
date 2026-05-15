import Link from "next/link"
import Image from "next/image"

export const Navbar = () => {
  return (
    <div className="navbar bg-vetlinex text-primary-content flex justify-between p-5">
      <div className="flex justify-start">
        <Link href="/" className="btn btn-ghost text-xl">
          <Image src="/logo_white.png" width={140} height={140} alt="Picture of the author"/>
        </Link>
      </div>
      <div className="flex justify-end space-x-4">
        <Link href="/#about" className="btn btn-ghost text-xl">Nosotros</Link>
        <Link href="/productos" className="btn btn-ghost text-xl">Productos</Link>
        <Link href="/blog" className="btn btn-ghost text-xl">Blogs</Link>
        <Link href="/contactanos" className="btn btn-ghost text-xl">Contáctenos</Link>
      </div>
    </div>
  )
}