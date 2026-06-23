import libros from './data/libros'
import './App.css'

function App() {
  return (
    <main className="app">
      <header className="app-header">
        <h1>Biblioteca</h1>
        <p>Catálogo de libros de la colección.</p>
      </header>

      <section className="book-list" aria-label="Listado de libros">
        {libros.map((libro) => (
          <article className="book-card" key={libro.id}>
            <div className="book-title-row">
              <h2>{libro.titulo}</h2>
              {libro.esNovedad && <span className="badge">Novedad</span>}
            </div>

            <p className="authors">{libro.autores.join(', ')}</p>
            <p>
              <strong>Editorial:</strong> {libro.editorial}
            </p>
            <p>
              <strong>Año:</strong> {libro.anio}
            </p>
            <p>
              <strong>Estado:</strong>{' '}
              <span className={`status ${libro.estado.toLowerCase()}`}>{libro.estado}</span>
            </p>
            <p className="summary">{libro.resumen}</p>
          </article>
        ))}
      </section>
    </main>
  )
}

export default App
