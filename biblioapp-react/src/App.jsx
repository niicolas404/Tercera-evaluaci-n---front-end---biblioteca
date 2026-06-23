import libros from './data/libros'
import LibroCard from './data/components/LibroCard'
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
          <LibroCard
            key={libro.id}
            titulo={libro.titulo}
            autores={libro.autores}
            editorial={libro.editorial}
            anio={libro.anio}
            estado={libro.estado}
            resumen={libro.resumen}
          />
        ))}
      </section>
    </main>
  )
}

export default App
