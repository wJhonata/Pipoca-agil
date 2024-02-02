import { ReactNode } from "react"
import { Header } from "./Header"

interface AuthContainerProps {
  children: ReactNode
}

export function AuthContainer({ children }: AuthContainerProps) {
  return (
    <div className="flex flex-col min-h-screen bg-cover bg-no-repeat bg-center bg-[url('/assets/png/bg-auth-pages.png')]">
      <div className="z-10">
        <Header />
      </div>
      
      {children}
    </div>
  )
}