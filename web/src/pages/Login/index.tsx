import { AuthContainer } from "../../components/AuthContainer"
import { Button } from "../../components/Button"

export function Login() {
  return (
    <AuthContainer>      
      <div className="flex flex-row items-center justify-between flex-1">          
        <div className="flex items-center justify-center w-1/2">
          <img src="/assets/png/ibson-face.png" alt="Ibson" />        
        </div>

        <div className="w-1/2 h-full absolute right-0 top-0 opacity-50 bg-yellow-200" />        

        <div className="flex flex-col items-center justify-center w-1/2 z-10 space-y-4">            
          <div className="flex flex-col w-full max-w-[583px] space-y-4">
            <input type="text" className="w-full p-6 bg-white font-bold text-2xl border-none text-[var(--light-yellow)] placeholder:text-[var(--light-yellow)]" placeholder="E-mail ou CPF" />
            <input type="text" className="w-full p-6 bg-white font-bold text-2xl border-none text-[var(--light-yellow)] placeholder:text-[var(--light-yellow)]" placeholder="Senha" />            
            <a href="#" className="font-bold text-xl text-zinc-800 hover:underline self-end">Esqueci a senha</a>          
          </div>
          
          <Button title="Entrar" />          

          <div className="flex flex-col items-center justify-center space-y-2">
            <span className="font-bold text-xl text-zinc-800">Ainda não é membro?</span>
            <a href="/register" className="font-bold text-xl text-zinc-800 hover:underline">Crie uma conta</a>
          </div>
        </div>
      </div>              
    </AuthContainer>
  )
}