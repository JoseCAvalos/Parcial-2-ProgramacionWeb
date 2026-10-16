import { useState } from "react";
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
  const [busqueda, setBusqueda] = useState("");

  const productos = [
    { id: 1, nombre: "Laptop Lenovo", categoria: "Computación", precio: 5500, stock: 10 },
    { id: 2, nombre: "Mouse Logitech", categoria: "Accesorios", precio: 250, stock: 25 },
    { id: 3, nombre: "Teclado Mecánico", categoria: "Accesorios", precio: 450, stock: 15 },
    { id: 4, nombre: "Monitor Samsung", categoria: "Monitores", precio: 1800, stock: 8 },
    { id: 5, nombre: "Audífonos Sony", categoria: "Audio", precio: 950, stock: 12 },
  ];

  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="contenedor">
      <h1>Registro de Productos</h1>

      <p>Sistema de consulta y búsqueda de productos</p>

      <input
        type="text"
        placeholder="Buscar producto por nombre..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <TablaProductos productos={productosFiltrados} />

      <p>Total de productos encontrados: {productosFiltrados.length}</p>
    </div>
  );
}

export default App;