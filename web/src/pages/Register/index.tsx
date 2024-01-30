import { Header } from '../../components/Header'
import './register.css'

export function Register() {
  return (
    <>
      <Header />
      <div className="register-container">

        <div className='register-content'>
          <div className='ibson-face'>
            <img src="/assets/png/ibson-face.png" alt="" />
          </div>

          <div className='register-content-main'>
            <input type="text" className="register-input" placeholder='Nome Completo' />
            <input type="text" className="register-input" placeholder='Data de Nascimento' />
            <input type="text" className="register-input" placeholder='E-mail ou CPF' />
            <input type="text" className="register-input" placeholder='Senha' />
            <input type="text" className="register-input" placeholder='Repetir a Senha' />

            <button type='button' className='btn-register'>
              
            </button>
          </div>
        </div>
      </div>
    </>
  )
}