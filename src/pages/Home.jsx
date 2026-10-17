import { useState } from 'react'
import SectionTitle from '../components/SectionTitle'

const publico = [
  ['icone-azul', 'bx-heart', 'Amantes de momentos', 'Pessoas que gostam de registrar encontros, festas e situações inesperadas, sem precisar parar tudo para configurar a câmera.'],
  ['icone-laranja', 'bx-map', 'Viagens', 'Para quem quer guardar paisagens, lugares e experiências com qualidade, mesmo em condições diferentes de luz.'],
  ['icone-rosa', 'bx-group', 'Família e amigos', 'Para quem ama registrar pessoas importantes sem precisar pedir várias vezes para repetir a foto.'],
  ['icone-verde', 'bx-check-circle', 'Praticidade', 'Para quem prefere apontar, clicar e confiar que a IA fará os ajustes necessários.'],
]

const galeria = [
  ['galeria1.png', 'Imagem das funcionalidades da SmartCam', 'A câmera reconhece a paisagem com pouca iluminação e sugere ativar o modo otimizado para destacar as cores, a água e os detalhes da vegetação sem escurecer a foto.'],
  ['galeria2.png', 'Imagem de um documento sendo capturado', 'O visor ajusta as guias de enquadramento ao redor do documento para capturar apenas a área importante, corrigindo a perspectiva e garantindo leitura clara.'],
  ['galeria3.png', 'Imagem de IA de escaneamento de texto em ação', 'A IA escaneia e destaca os blocos de texto presentes na imagem, permitindo selecionar, copiar ou traduzir o conteúdo com um simples toque na tela.'],
]

const equipe = [
  ['Bianca.png', 'Bianca Vitória Veloso', 'Web development'],
  ['Gabi.png', 'Gabriella Viana Lisboa', 'Front-end Design'],
  ['Maga.png', 'Maria Gabriela G Dantas', 'Front-end Design'],
  ['Vicente.png', 'Vicente de Souza Stramantino', 'Web development'],
  ['Felipe.png', 'Felipe Cardozo', 'Front-end Design'],
]

export default function Home() {
  const [enviado, setEnviado] = useState(false)

  function enviarFormulario(evento) {
    evento.preventDefault()
    setEnviado(true)
  }

  return (
    <main id="conteudo">
      <a className="pular-link" href="#conteudo">Pular para o conteúdo</a>

      <section id="solucao" className="secao topo" aria-labelledby="titulo-topo">
        <div className="container grid-topo grid">
          <div className="texto-topo item">
            <h1 id="titulo-topo">Sua nova ferramenta favorita<br /> para <span className="destaque">registrar momentos</span></h1>
            <p className="subtitulo">Tenha qualidade incrível com zero complicação, foco automático e ajuste de luz em tempo real para deixar suas fotos perfeitas em qualquer ambiente.</p>
            <a href="#publico" className="botao botao-azul">Ver mais</a>
          </div>
          <figure className="imagem-topo item"><img src="/img/principal.png" alt="Imagem de um dos celulares da Jovi" width="900" height="640" /></figure>
        </div>

        <div className="caixa-sobre">
          <div className="container grid-sobre grid">
            <div className="texto-sobre item">
              <span className="etiqueta etiqueta-clara">Sobre</span>
              <h2>Tenha qualidade incrível com <strong>zero complicação</strong></h2>
              <p className="subtitulo">Uma IA integrada na câmera que te proporciona...</p>
              <ul className="lista-recursos">
                <li><span className="icone-recurso" aria-hidden="true"><i className="bx bx-capture" /></span><span>Foco automático</span></li>
                <li><span className="icone-recurso" aria-hidden="true"><i className="bx bx-sun" /></span><span>Ajuste de luz em tempo real</span></li>
                <li><span className="icone-recurso" aria-hidden="true"><i className="bx bx-file" /></span><span>Transcrição automática de documentos</span></li>
              </ul>
              <p className="nota-sobre">Você <strong>não precisa ser um fotógrafo profissional</strong> para utilizar as câmeras da JOVI</p>
              <p className="destaque-sobre">Basta ter nosso assistente!</p>
            </div>
            <figure className="imagem-sobre item"><img src="/img/sobre.png" alt="Imagem de um dos celulares da Jovi" width="700" height="760" /></figure>
          </div>
        </div>
      </section>

      <section id="publico" className="secao publico" aria-labelledby="titulo-publico">
        <div className="container">
          <SectionTitle label="Público-alvo" title="Ama aproveitar o momento" description="Para quem quer tirar fotos incríveis sem precisar entender de fotografia." />
          <div className="grid-publico grid">
            <figure className="imagem-publico item"><img src="/img/publico_alvo.png" alt="Imagem de uma mulher tirando uma foto com a câmera da Jovi" width="600" height="760" /></figure>
            <ul className="lista-cards item">{publico.map(([cor, icone, titulo, texto]) => <li className="card" key={titulo}><span className={`icone-card ${cor}`} aria-hidden="true"><i className={`bx ${icone}`} /></span><h3>{titulo}</h3><p>{texto}</p></li>)}</ul>
          </div>
        </div>
      </section>

      <section id="galeria" className="secao galeria" aria-labelledby="titulo-galeria">
        <div className="container">
          <SectionTitle label="Galeria" title="Inteligência da câmera em ação" description="Identificação visual em tempo real para entregar a melhor versão da sua foto." className="titulo-esquerda" />
          <div className="grid-galeria grid">{galeria.map(([imagem, alt, texto]) => <article className="card-galeria item" key={imagem}><figure className="celular"><img src={`/img/${imagem}`} alt={alt} width="380" height="700" /></figure><p>{texto}</p></article>)}</div>
        </div>
      </section>

      <section id="equipe" className="secao equipe" aria-labelledby="titulo-equipe">
        <div className="container">
          <SectionTitle label="Nossa Equipe" title="Nossa Equipe" className="titulo-direita" />
          <ul className="grid-equipe grid">{equipe.map(([imagem, nome, cargo]) => <li className="card-equipe item" key={nome}><img className="foto-equipe" src={`/img/${imagem}`} alt={`Integrante da equipe ${nome}`} width="160" height="160" /><h3>{nome}</h3><p>{cargo}</p></li>)}</ul>
        </div>
      </section>

      <section id="contato" className="secao contato" aria-labelledby="titulo-contato">
        <div className="container grid-contato grid">
          <div className="caixa-formulario item">
            <h2 id="titulo-contato">Entre em contato para saber mais!</h2>
            <form className="formulario" onSubmit={enviarFormulario}>
              <div className="campo"><label htmlFor="nome">Nome</label><input type="text" id="nome" name="nome" placeholder="Digite seu nome" required /></div>
              <div className="campo"><label htmlFor="email">E-mail</label><input type="email" id="email" name="email" placeholder="Digite seu e-mail" required /></div>
              <div className="campo"><label htmlFor="telefone">Telefone</label><input type="tel" id="telefone" name="telefone" placeholder="Digite seu telefone" /></div>
              <button type="submit" className="botao botao-azul">Enviar</button>
              {enviado && <p className="mensagem-formulario" role="status">Mensagem enviada com sucesso!</p>}
            </form>
          </div>
          <figure className="imagem-contato item"><img src="/img/contato.png" alt="Imagem de contato com a equipe da Jovi" width="600" height="640" /></figure>
        </div>
      </section>
    </main>
  )
}
