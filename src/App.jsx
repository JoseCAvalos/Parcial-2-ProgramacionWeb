import { useState, useEffect } from "react";
import "./App.css";

function TablaProductos({ productos }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Producto</th>
          <th>Categoría</th>
          <th>Precio</th>
          <th>Stock</th>
        </tr>
      </thead>

      <tbody>
        {productos.map((producto) => (
          <tr key={producto.id}>
            <td>{producto.id}</td>
            <td>{producto.nombre}</td>
            <td>{producto.categoria}</td>
            <td>Q{producto.precio.toFixed(2)}</td>
            <td>{producto.stock}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function App() {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  // Obtener productos desde la API REST
  useEffect(() => {
    async function obtenerProductos() {
      try {
        const respuesta = await fetch("http://localhost:3000/api/productos");

        if (!respuesta.ok) {
          throw new Error("Error al consultar los productos");
        }

        const datos = await respuesta.json();

        setProductos(datos);
      } catch (error) {
        setError(error.message);
      } finally {
        setCargando(false);
      }
    }

    obtenerProductos();
  }, []);

  // Filtrar productos por nombre
  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="contenedor">
      <h1>Registro de Productos</h1>

      <p>Sistema de inventario, consulta y búsqueda de productos</p>

      <input
        type="text"
        placeholder="Buscar producto por nombre..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      {cargando ? (
        <p>Cargando productos...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <>
          <TablaProductos productos={productosFiltrados} />

          <p>
            Total de productos encontrados: {productosFiltrados.length}
          </p>
        </>
      )}
    </div>
  );
}

export default App;