import { Navigate } from 'react-router-dom'

export default function RotaPrivada({ children }) {
  const usuario = localStorage.getItem('usuarioLogado')

  if (!usuario) {
    return <Navigate to="/login" replace />
  }

  return children
}
