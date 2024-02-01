import { useState } from "react"
import { IoMdArrowRoundDown  } from "react-icons/io"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"

export function Home() {
  const [isActive, setIsActive] = useState(false)
  const onClick = () => setIsActive(!isActive)

  return (
    <div className="flex flex-col min-h-screen bg-cover bg-no-repeat bg-center bg-[url('/assets/png/bg-pipoca.png')]">
      <Header />

      <main className="flex flex-row justify-between flex-1">
        <article className="flex w-1/2 self-end">          
          <img src="/assets/png/bucket-popcorn.png" alt="Balde de Pipoca" className="size-4/5" />
        </article>        
        
        <aside className="flex-1">
          <section className="flex flex-col items-center justify-center">
            <img src="assets/png/image-ibson.png" alt="Ibson Cabral dono do pipoca ágil" className="w-9/12" />
            
            <p className="text-white text-2xl font-semibold mb-8">Seu Podcast do Mundo Ágil com <br /> muito bom humor e informação!</p>            
            
            <div className="relative space-y-4">
              <Button 
                onClick={onClick}
                title="Vem conferir"
                icon={<IoMdArrowRoundDown className={`size-5 transition-transform duration-500 ${isActive ? '-rotate-180' : ''}`}/>}                                
              />

              <nav className={`${isActive ? 'opacity-1 animate-menu-open' : 'opacity-0 animate-menu-close'}`}>
                <ul className="space-y-4">
                  <li><a href="#" className="flex items-center justify-center text-white font-bold text-base px-8 py-3 bg-[var(--red-color)] rounded-full hover:opacity-80">Assinantes</a></li>
                  <li><a href="#" className="flex items-center justify-center text-white font-bold text-base px-8 py-3 bg-[var(--red-color)] rounded-full hover:opacity-80">Trilha</a></li>
                  <li><a href="#" className="flex items-center justify-center text-white font-bold text-base px-8 py-3 bg-[var(--red-color)] rounded-full hover:opacity-80">Playlist</a></li>
                </ul>
              </nav>
            </div>            
          </section>
        </aside>
      </main>
    </div>
  )
}