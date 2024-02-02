import { ComponentProps } from "react"

type HeaderLinkProps = ComponentProps<'a'> & {}

export function HeaderLink(props: HeaderLinkProps) {
  return (
    <a 
      href={props.href} 
      className="
        flex items-center justify-center text-black font-semibold text-base min-w-44 px-8 py-3 
        hover:bg-[var(--red-color)] hover:text-white 
        hover:border-[6px] hover:border-[var(--light-yellow)] hover:border-solid hover:rounded-full
      "
    >
      {props.title}
    </a>
  )
}