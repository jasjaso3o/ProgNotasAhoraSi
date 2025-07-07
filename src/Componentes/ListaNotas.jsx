import { Nota } from './Nota';
import { Filtrar } from './Filtrar';

export function ListaNotas({ notas, cambiarEstadoNota, eliminarNota, setFiltroCategoria }) {
  return (
    <div className='ListaNotas'>
      <Filtrar setFiltroCategoria={setFiltroCategoria} />
      {notas.length === 0 ? ( <p>No hay notas aún.</p>) : 
      (
        <ul>
          {notas.map(nota => (
            <Nota
              key={nota.id}
              nota={nota}
              cambiarEstadoNota={cambiarEstadoNota}
              eliminarNota={eliminarNota}
            />
          ))}
        </ul>
      )}
    </div>
  );
}