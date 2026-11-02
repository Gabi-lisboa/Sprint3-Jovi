import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { buscarFotos } from '../services/api'

export default function Painel() {
  const navigate = useNavigate()
  const usuario = JSON.parse(localStorage.getItem('usuarioLogado'))
  const [fotos, setFotos] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')

  useEffect(() => {
    buscarFotos()
      .then((dados) => setFotos(dados))
      .catch(() => setErro('Não foi possível carregar suas fotos.'))
      .finally(() => setCarregando(false))
  }, [])

  function sair() {
    localStorage.removeItem('usuarioLogado')
    navigate('/login')
  }

  return (
    <main className="secao flex-1">
      <div className="container">
        <h2>Olá, {usuario.nome}!</h2>
        <p>Bem-vindo ao seu painel da SmartCam. Aqui estão suas últimas fotos.</p>

        {carregando && <p>Carregando fotos...</p>}
        {erro && <p className="mensagem-erro">{erro}</p>}

        {!carregando && !erro && fotos.length === 0 && <p>Você ainda não tem fotos.</p>}

        <ul className="grid-galeria grid">
          {fotos.map((foto) => (
            <li className="card-galeria item" key={foto.id}>
              <figure className="celular">
                <img src={`https://picsum.photos/id/${foto.id}/380/700`} alt={`Foto de ${foto.author}`} width="380" height="700" />
              </figure>
              <h3 className="titulo-foto">Foto {foto.id}</h3>
              <p>Autor: {foto.author}</p>
            </li>
          ))}
        </ul>

        <button type="button" className="botao botao-azul mt-8" onClick={sair}>Sair</button>
      </div>
    </main>
  )
}
