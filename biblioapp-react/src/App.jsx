import { useState } from 'react'
import libros from './data/libros'
import ListaLibros from './data/components/ListaLibros'
import FiltroEstado from './data/components/FiltroEstado'
import './App.css'

function normalizarTexto(valor) {
  if (valor == null) {
    return ''
  }

  return String(valor)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .toLowerCase()
}

function App() {
  const [filtroEstado, setFiltroEstado] = useState('todos')
  const [busqueda, setBusqueda] = useState('')

  const textoBusquedaNormalizado = normalizarTexto(busqueda)

  const librosFiltrados = libros.filter((libro) => {
    const estadoNormalizado = normalizarTexto(libro.estado)
    const tituloNormalizado = normalizarTexto(libro.titulo)

    const coincideEstado = filtroEstado === 'todos' || estadoNormalizado === filtroEstado
    const coincideBusqueda =
      textoBusquedaNormalizado === '' || tituloNormalizado.includes(textoBusquedaNormalizado)

    return coincideEstado && coincideBusqueda
  })

  return (
    <main className="app">
      <header className="app-header">
        <h1>Biblioteca</h1>
        <p>Catálogo de libros de la colección.</p>
      </header>

      <section className="toolbar" aria-label="Herramientas de filtrado">
        <FiltroEstado valor={filtroEstado} onCambiar={setFiltroEstado} />

        <label className="search-field">
          <span>Buscar por título</span>
          <input
            type="text"
            value={busqueda}
            onChange={(evento) => setBusqueda(evento.target.value)}
            placeholder="Ej. React"
          />
        </label>
      </section>

      {librosFiltrados.length > 0 ? (
        <ListaLibros libros={librosFiltrados} />
      ) : (
        <p className="empty-state">No hay libros que coincidan</p>
      )}
    </main>
  )
}

export default App
