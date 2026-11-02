import { useNavigate } from 'react-router-dom'

export default function Painel() {
  const navigate = useNavigate()
  const usuario = JSON.parse(localStorage.getItem('usuarioLogado'))

  function sair() {
    localStorage.removeItem('usuarioLogado')
    navigate('/login')
  }

  return (
    <main className="secao flex-1">
      <div className="container">
        <h2>Olá, {usuario.nome}!</h2>
        <p>Bem-vindo ao seu painel da SmartCam.</p>
        <button type="button" className="botao botao-azul" onClick={sair}>Sair</button>
      </div>
    </main>
  )
}
