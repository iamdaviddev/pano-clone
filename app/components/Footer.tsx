import Image from "next/image";
import Link from "next/link";
import logoImg from '/public/logo.svg'

export function Footer(){
  return(
    <footer>
      <Image src={logoImg} alt="pano logo image"/>
      <p>© 2024 Pano by Plain Sight Ventures</p>
      <Link href="">Privacy</Link>
      <Link href="">Terms</Link>
      <Link href="">Security</Link>
      <button>Get Demo</button>
    </footer>
  )
}