import libros from './data/libros'
import ListaLibros from './data/components/ListaLibros'
import './App.css'

function App() {
  return (
    <main className="app">
      <header className="app-header">
        <h1>Biblioteca</h1>
        <p>Catálogo de libros de la colección.</p>
      </header>

      <ListaLibros libros={libros} />
    </main>
  )
}

export default App
