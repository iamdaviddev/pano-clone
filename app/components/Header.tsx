import Image from "next/image";
import logoImg from '/public/logo.svg'
import Link from "next/link";

export function Header(){
  return(
    <header className="bg-[#F3EEE3]">
      <div className="flex items-center justify-between  p-8 max-w-[1200px] m-auto">
        <Image src={logoImg} alt="pano logo image"/>
        <nav className="flex items-center gap-10 text-lg">
          <Link href="/team" className="text-lg font-medium hover:text-[#04DA00] duration-200">
            Teams
          </Link>
          <Link href="/integration" className="text-lg font-medium hover:text-[#04DA00] duration-200">Integrations</Link>
          <Link href="/pricing" className="text-lg font-medium hover:text-[#04DA00] duration-200">Pricing</Link>
          <Link href="/blog" className="text-lg font-medium hover:text-[#04DA00] duration-200">Blog</Link>
          <Link href="/login" className="text-lg font-medium hover:text-[#04DA00] duration-200">Login</Link>
          <button className="bg-black text-white font-medium w-[151.13px] h-[54px] rounded-full hover:bg-[#04DA00] transition-all duration-300">Try it free</button>
        </nav>
      </div>
    </header>
  )
}