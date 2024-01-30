export function LoginForm() {
  return (
    <div>
      <input type="text" className="login-input" placeholder='E-mail ou CPF' />
      <input type="text" className="login-input" placeholder='Senha' />            

      <button type='button' className='btn-login-page'>
        Entrar
      </button>
    </div>
  )
}