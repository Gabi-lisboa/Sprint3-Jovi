const equipe = [
  'Bianca Vitória Veloso',
  'Gabriella Viana Lisboa',
  'Maria Gabriela G Dantas',
  'Vicente de Souza Stramantino',
  'Felipe Cardozo',
]

export default function Footer() {
  return (
    <footer className="rodape">
      <div className="container grid-rodape grid">
        <div className="marca-rodape item">
          <p className="logo logo-clara">Smart<strong>Cam</strong></p>
          <p className="texto-feat">Feat <span className="nome-jovi">JOVI</span></p>
        </div>

        <nav className="menu-rodape item" aria-label="Equipe no rodapé">
          <h3>Equipe</h3>
          <ul>{equipe.map((nome) => <li key={nome}>{nome}</li>)}</ul>
        </nav>

        <nav className="menu-rodape item" aria-label="Acesso rápido no rodapé">
          <h3>Acesso rápido</h3>
          <ul>
            {[
              ['solucao', 'Solução'],
              ['publico', 'Público-alvo'],
              ['galeria', 'Galeria'],
              ['contato', 'Contato'],
            ].map(([id, nome]) => <li key={id}><a href={`#${id}`}>{nome}</a></li>)}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
