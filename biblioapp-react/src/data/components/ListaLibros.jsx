import PropTypes from 'prop-types'
import LibroCard from './LibroCard'

function ListaLibros({ libros }) {
  return (
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
          esNovedad={libro.esNovedad}
        />
      ))}
    </section>
  )
}

ListaLibros.propTypes = {
  libros: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      titulo: PropTypes.string,
      autores: PropTypes.arrayOf(PropTypes.string),
      editorial: PropTypes.string,
      anio: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      estado: PropTypes.string,
      resumen: PropTypes.string,
      esNovedad: PropTypes.bool,
    })
  ).isRequired,
}

export default ListaLibros
