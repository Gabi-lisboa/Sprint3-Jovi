import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const links = [
  ['solucao', 'Solução'],
  ['publico', 'Público-alvo'],
  ['galeria', 'Galeria'],
  ['equipe', 'Nossa Equipe'],
  ['contato', 'Contato'],
]

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const logado = localStorage.getItem('usuarioLogado')

  function fecharMenu() {
    setMenuAberto(false)
  }

  function sair() {
    localStorage.removeItem('usuarioLogado')
    fecharMenu()
    navigate('/login')
  }

  return (
    <header className="cabecalho">
      <div className="container cabecalho-linha">
        <a href="/#solucao" className="logo" aria-label="Logo - página inicial" onClick={fecharMenu}>
          Smart<strong>Cam</strong>
        </a>

        <button
          type="button"
          className="botao-menu transition-colors duration-200"
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuAberto}
          onClick={() => setMenuAberto((aberto) => !aberto)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`menu ${menuAberto ? 'menu-aberto' : ''}`} aria-label="Navegação principal">
          <ul className="lista-menu">
            {links.map(([id, nome], index) => (
              <li key={id}>
                <a
                  href={`/#${id}`}
                  className={`link-menu font-semibold transition-colors duration-200 ${index === 0 && location.pathname === '/' ? 'ativo' : ''}`}
                  onClick={fecharMenu}
                >
                  {nome}
                </a>
              </li>
            ))}
            {logado ? (
              <>
                <li>
                  <Link
                    to="/painel"
                    className={`link-menu font-semibold transition-colors duration-200 ${location.pathname === '/painel' ? 'ativo' : ''}`}
                    onClick={fecharMenu}
                  >
                    Painel
                  </Link>
                </li>
                <li>
                  <button type="button" className="link-menu botao-sair font-semibold transition-colors duration-200" onClick={sair}>
                    Sair
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link
                  to="/login"
                  className={`link-menu font-semibold transition-colors duration-200 ${location.pathname === '/login' ? 'ativo' : ''}`}
                  onClick={fecharMenu}
                >
                  Entrar
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}
