const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Configuración
app.use(cors());
app.use(express.json());

// Datos de productos
const productos = [
  {
    id: 1,
    nombre: "Laptop Lenovo",
    categoria: "Computación",
    precio: 5500,
    stock: 10
  },
  {
    id: 2,
    nombre: "Mouse Logitech",
    categoria: "Accesorios",
    precio: 250,
    stock: 25
  },
  {
    id: 3,
    nombre: "Teclado Mecánico",
    categoria: "Accesorios",
    precio: 450,
    stock: 15
  },
  {
    id: 4,
    nombre: "Monitor Samsung",
    categoria: "Monitores",
    precio: 1800,
    stock: 8
  },
  {
    id: 5,
    nombre: "Audífonos Sony",
    categoria: "Audio",
    precio: 950,
    stock: 12
  }
];

// GET: Obtener todos los productos
app.get("/api/productos", (req, res) => {
  res.json(productos);
});

// GET: Obtener un producto por ID
app.get("/api/productos/:id", (req, res) => {
  const id = Number(req.params.id);

  const producto = productos.find((p) => p.id === id);

  if (!producto) {
    return res.status(404).json({
      mensaje: "Producto no encontrado"
    });
  }

  res.json(producto);
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});