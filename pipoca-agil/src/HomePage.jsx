import React, { useState } from "react";
import { IoMdPerson, IoMdArrowRoundDown  } from 'react-icons/io';



function Home (){
    
  
  const [isActive, setIsActive] = useState(false)
  const onClick = () => setIsActive(!isActive)



  return (
      <div className="content-main">
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
                  <a href="" className="btn-login">Login</a>
                </div>
            </nav>
        </header>
      <main>
      <article>
        <img src="/assets/png/bucket-popcorn.png" alt="Balde de Pipoca" />
      </article>

      <div className="content">
        <section className="content-right">
          <img src="assets/png/image-ibson.png" alt="Ibson Cabral dono do pipoca ágil" />
          <p>Seu Podcast do Mundo Ágil com <br /> muito bom humor e informação!</p>
          
          <div className="content-dropdown">
          <button onClick={onClick} className="menu-btn">
          Vem Conferir
          <IoMdArrowRoundDown className={`icon-arrow ${isActive ? 'rotate' : ''}`}/>
          </button>

          <div className="menu-dropdown">
            <nav className={`menu ${isActive ? 'active' : 'inactive'}`}>
              <ul>
                <li className="list-menu"><a href="#" className="item-menu">Assinantes</a></li>
                <li className="list-menu"><a href="#" className="item-menu">Trilha</a></li>
                <li className="list-menu"><a href="#" className="item-menu">Playlist</a></li>
              </ul>
            </nav>
            </div>
            </div>
        
        </section>
      </div>
      </main>
      </div>

      
    );
  };
  
  export default Home;
 