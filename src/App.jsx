import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import RotaPrivada from './components/RotaPrivada'
import Home from './pages/Home'
import Login from './pages/Login'
import Painel from './pages/Painel'
import NaoEncontrada from './pages/NaoEncontrada'

export default function App() {
  return (
    <div className="app min-h-screen flex flex-col">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/painel"
          element={
            <RotaPrivada>
              <Painel />
            </RotaPrivada>
          }
        />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      <Footer />
    </div>
  )
}
