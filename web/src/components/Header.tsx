import { IoMdPerson  } from 'react-icons/io';

export function Header() {
  return (
    <header>
      <div className="logo">
          <img src="/assets/svg/logo.svg" alt="Logo Pipoca Ágil" />
      </div>
      <nav>
        <ul className="btn-header">
          <li><a href="" className="item-header">Home</a></li>
          <li><a href="" className="item-header">Galeria</a></li>
          <li><a href="" className="item-header">Inscreva-se</a></li>
        </ul>
        <div className="login-area">
          <IoMdPerson className="icon-person" />
          <span></span>
          <a href="/login" className="btn-login">Login</a>
        </div>
      </nav>
    </header>
  )
}