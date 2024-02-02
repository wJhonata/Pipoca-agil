import { IoMdPerson  } from "react-icons/io"
import { HeaderLink } from "./HeaderLink"
import { Separator } from "./Separator"

export function Header() {
  return (
    <header className="flex w-full justify-between items-center bg-yellow-50 px-8 h-20">
      <img src="/assets/svg/logo.svg" alt="Logo do Pipoca Ágil" className="size-20" />       

      <nav className="flex flex-row items-center">
        <ul className="flex flex-row items-center gap-5">
          <li><HeaderLink href="/" title="Home" /></li>          
          <li><HeaderLink href="" title="Galeria" /></li>
          <li><HeaderLink href="/register" title="Inscreva-se" /></li>
        </ul>

        <div className="flex flex-row items-center justify-center p-4 gap-6">
          <IoMdPerson size={24} color="red" />
          <Separator />
          <a href="/login" className="text-black font-semibold text-base hover:underline">Login</a>
        </div>
      </nav>
    </header>
  )
}