export function Filtrar({ setFiltroCategoria }) {
const manejarCambio = (e) => {
    setFiltroCategoria(e.target.value);
};

return (
    <div>
        <select onChange={manejarCambio}>
            <option value="Todas">Todas las notas</option>
            <option value="Colegio">Colegio</option>
            <option value="Vida Personal">Vida Personal</option>
            <option value="Trabajo">Trabajo</option>
            <option value="Compras">Compras</option>
            <option value="Hogar">Hogar</option>
        </select>
    </div>
    );
}
