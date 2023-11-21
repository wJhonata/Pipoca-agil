import React from "react";
import { IoMdPerson } from 'react-icons/io';

// function HomePage() {
//     return(<h1>Teste1</h1>)
    
// }

// export default HomePage
function Home (){
    return (
      <div>
        <header>
            <div className="logo">
                <img src="/assets/svg/logo.svg" alt="Logo Pipoca Ágil" />
            </div>
            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Galeria</a></li>
                    <li><a href="">Inscreva-se</a></li>
                </ul>
                <div className="login-area">
                  {/* <img src="/assets/svg/login-icon.svg" alt="Ícone de Login" /> */}
                  <IoMdPerson className="icon-person" />
                  <span></span>
                  <a href="">Login</a>
                </div>
            </nav>
        </header>

        {/* <section>
          <div className="content-home">
            <div className="content-left">
              <img src="/assets/png/bucket-popcorn.png" alt="Balde de pipoca" />
            </div>
            <div className="content-right">

            </div>
          </div>
        </section> */}
      </div>
    );
  };
  
  export default Home;