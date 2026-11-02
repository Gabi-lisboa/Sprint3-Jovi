export async function buscarUsuarios() {
  const resposta = await fetch('/api/usuarios.json')

  if (!resposta.ok) {
    throw new Error('Erro ao buscar usuários')
  }

  return resposta.json()
}

export async function buscarFotos() {
  const resposta = await fetch('/api/fotos.json')

  if (!resposta.ok) {
    throw new Error('Erro ao buscar fotos')
  }

  return resposta.json()
}

export async function enviarContato(dados) {
  const resposta = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados),
  })

  if (!resposta.ok) {
    throw new Error('Erro ao enviar contato')
  }

  return resposta.json()
}
