import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const usuarioTeste = {
  nome: 'Usuário Teste',
  email: 'teste@smartcam.com',
  senha: '123456',
}

export default function Login() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')
  const navigate = useNavigate()

  if (localStorage.getItem('usuarioLogado')) {
    return <Navigate to="/painel" replace />
  }

  function entrar(evento) {
    evento.preventDefault()

    if (email === '' || senha === '') {
      setErro('Preencha o e-mail e a senha.')
      return
    }

    if (!email.includes('@')) {
      setErro('Digite um e-mail válido.')
      return
    }

    if (senha.length < 6) {
      setErro('A senha precisa ter pelo menos 6 caracteres.')
      return
    }

    if (email !== usuarioTeste.email || senha !== usuarioTeste.senha) {
      setErro('E-mail ou senha incorretos.')
      return
    }

    localStorage.setItem('usuarioLogado', JSON.stringify({ nome: usuarioTeste.nome, email: usuarioTeste.email }))
    navigate('/painel')
  }

  return (
    <main className="secao flex-1">
      <div className="container">
        <div className="caixa-formulario caixa-login">
          <h2>Entrar</h2>
          <p>Acesse sua área para ver suas fotos da SmartCam.</p>
          <form className="formulario" onSubmit={entrar} noValidate>
            <div className="campo">
              <label htmlFor="email-login">E-mail</label>
              <input type="email" id="email-login" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu e-mail" />
            </div>
            <div className="campo">
              <label htmlFor="senha-login">Senha</label>
              <input type="password" id="senha-login" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Digite sua senha" />
            </div>
            {erro && <p className="mensagem-erro" role="alert">{erro}</p>}
            <button type="submit" className="botao botao-azul">Entrar</button>
          </form>
        </div>
      </div>
    </main>
  )
}
