import PropTypes from 'prop-types'

function LibroCard({
  titulo,
  autores,
  editorial,
  anio,
  estado,
  resumen,
}) {
  const estadoNormalizado = typeof estado === 'string' ? estado.trim().toLowerCase() : ''
  const autoresTexto = Array.isArray(autores) ? autores.join(', ') : ''

  return (
    <article className="book-card">
      <div className="book-title-row">
        <h2>{titulo}</h2>
      </div>

      <p className="authors">{autoresTexto}</p>
      <p>
        <strong>Editorial:</strong> {editorial}
      </p>
      <p>
        <strong>Año:</strong> {anio}
      </p>
      <p>
        <strong>Estado:</strong>{' '}
        <span className={`status-pill ${estadoNormalizado}`}>{estado}</span>
      </p>
      <p className="summary">{resumen}</p>
    </article>
  )
}

LibroCard.propTypes = {
  titulo: PropTypes.string,
  autores: PropTypes.arrayOf(PropTypes.string),
  editorial: PropTypes.string,
  anio: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  estado: PropTypes.string,
  resumen: PropTypes.string,
}

LibroCard.defaultProps = {
  titulo: 'Título no disponible',
  autores: ['Autor no disponible'],
  editorial: 'Editorial no disponible',
  anio: 'Año no disponible',
  estado: 'Disponible',
  resumen: 'Sin descripción disponible.',
}

export default LibroCard
