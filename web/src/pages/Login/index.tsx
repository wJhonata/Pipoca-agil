import { Header } from '../../components/Header'
import './login.css'

export function Login() {
  return (
    <>
      <Header />
      <div className="login-container">
        <div className='login-content'>          
          <div className='ibson-face'>
            <img src="/assets/png/ibson-face.png" alt="" />
          </div>

          <div className='login-content-main'>            
            <input type="text" className="login-input" placeholder='E-mail ou CPF' />
            <input type="text" className="login-input" placeholder='Senha' />            

            <button type='button' className='btn-login-page'>
              Entrar
            </button>
          </div>
        </div>        
      </div>
    </>
  )
}