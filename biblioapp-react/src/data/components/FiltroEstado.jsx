import PropTypes from 'prop-types'

function FiltroEstado({ valor, onCambiar }) {
  return (
    <label className="filter-select">
      <span>Filtrar por estado</span>
      <select value={valor} onChange={(evento) => onCambiar(evento.target.value)}>
        <option value="todos">Todos</option>
        <option value="disponible">Disponible</option>
        <option value="prestado">Prestado</option>
        <option value="reservado">Reservado</option>
      </select>
    </label>
  )
}

FiltroEstado.propTypes = {
  valor: PropTypes.string.isRequired,
  onCambiar: PropTypes.func.isRequired,
}

export default FiltroEstado
