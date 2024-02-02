import { ComponentProps, ReactNode } from "react"

type ButtonProps = ComponentProps<'button'> & {
  icon?: ReactNode
  animation?: string
  withBorder?: boolean
}

export function Button(props: ButtonProps) {
  return (
    <button 
      {...props}  
      onClick={props.onClick} 
      className={`
        size-full flex items-center justify-center gap-2 text-white font-semibold text-2xl min-w-44 w-56 px-8 py-3 bg-[var(--red-color)] rounded-full
        ${props.withBorder ? "border-[6px] border-[var(--light-yellow)] border-solid" : ""}         
      `}
    >
      {props.title}
      
      {props.icon}      
    </button>
  )
}