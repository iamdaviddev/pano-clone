import Image from "next/image";
import logoImg from '/public/logo.svg'
import Link from "next/link";

export function Header(){
  return(
    <header className="bg-[#F3EEE3]">
      <div className="flex items-center justify-between  p-8 max-w-[1200px] m-auto">
        <Image src={logoImg} alt="pano logo image"/>
        <nav className="flex items-center gap-10 text-lg">
          <Link href="/team">
            Teams
          </Link>
          <Link href="/integration">Integrations</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/login">Login</Link>
          <button className="bg-black text-white font-medium w-44 h-12 rounded-full hover:bg-[#04DA00] transition-all duration-300">Try it free</button>
        </nav>
      </div>
    </header>
  )
}