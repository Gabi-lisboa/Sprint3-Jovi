import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { buscarUsuarios } from '../services/api'

export default function Login() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')
  const [carregando, setCarregando] = useState(false)
  const navigate = useNavigate()

  if (localStorage.getItem('usuarioLogado')) {
    return <Navigate to="/painel" replace />
  }

  async function entrar(evento) {
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

    setErro('')
    setCarregando(true)

    try {
      const usuarios = await buscarUsuarios()
      const usuario = usuarios.find((u) => u.email === email && u.senha === senha)

      if (!usuario) {
        setErro('E-mail ou senha incorretos.')
        setCarregando(false)
        return
      }

      localStorage.setItem('usuarioLogado', JSON.stringify({ id: usuario.id, nome: usuario.nome, email: usuario.email }))
      navigate('/painel')
    } catch {
      setErro('Não foi possível conectar com o servidor. Tente novamente.')
      setCarregando(false)
    }
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
            <button type="submit" className="botao botao-azul" disabled={carregando}>
              {carregando ? 'Entrando...' : 'Entrar'}
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
