import { Link } from 'react-router-dom'

export default function NaoEncontrada() {
  return (
    <main className="secao flex-1">
      <div className="container text-center">
        <h2>Página não encontrada</h2>
        <p>A página que você tentou acessar não existe.</p>
        <Link to="/" className="botao botao-azul">Voltar para o início</Link>
      </div>
    </main>
  )
}
