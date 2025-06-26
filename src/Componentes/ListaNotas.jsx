import { Nota } from './Nota';

export function ListaNotas({ notas, cambiarEstadoNota, eliminarNota }) {
  if (notas.length === 0) return <p>No hay notas aún.</p>;

  return (
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
  );
}
