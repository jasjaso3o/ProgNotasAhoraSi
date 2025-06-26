export function Nota({ nota, cambiarEstadoNota, eliminarNota }) {
  const { id, texto, categoria, estado } = nota;

  return (
    <li>
      <p>{texto}</p>
      <p>Categoría: {categoria} | Estado: {estado}</p>
      <div>
        <button onClick={() => cambiarEstadoNota(id, 'Pendiente')}>Pendiente</button>
        <button onClick={() => cambiarEstadoNota(id, 'En Proceso')}>En Proceso</button>
        <button onClick={() => cambiarEstadoNota(id, 'Finalizado')}>Finalizado</button>
        <button onClick={() => eliminarNota(id)}>Eliminar</button>
      </div>
    </li>
  );
}
