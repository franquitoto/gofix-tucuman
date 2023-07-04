let productos;
const mostrarProducto = (productos) => {
  // Con esto eliminamos todos los html que tenga el contenedor de 
  //productos para que no se dupliquen cada vez que usamos un filtro
  while (contenedorProductos.firstChild) {
    contenedorProductos.removeChild(contenedorProductos.firstChild)
  }
  productos.forEach((e) => {
    const tarjetaProducto = document.createElement("div");
    const headerProducto = document.createElement("div");
    const categoria = document.createElement("p");
    const titulo = document.createElement("p");
    const contenedorImg = document.createElement("div");
    const img = document.createElement("img");
    const footerProducto = document.createElement("div");
    const precio = document.createElement("p");
    const button = document.createElement("button");
    const button2 = document.createElement("button");
    const i = document.createElement("i");
    const i2 = document.createElement("i");

    // Le doy los atributos de class
    tarjetaProducto.classList.add("tarjeta-producto");
    headerProducto.classList.add("header-producto");
    categoria.classList.add("categoria");
    titulo.classList.add("titulo-producto");
    contenedorImg.classList.add("contenedor-img");
    img.classList.add("imagen-producto");
    footerProducto.classList.add("footer-producto");
    precio.classList.add("precio-producto");
    button2.classList.add("agregar-carrito");
    button2.classList.add("editar-img");
    i2.classList.add("bi")
    i2.classList.add("bi-pencil-square")
    button.classList.add("agregar-carrito");
    i.classList.add("bi")
    i.classList.add("bi-bag-plus-fill")
    // Le doy los atributos de id
    tarjetaProducto.setAttribute("id", e._id);
    categoria.setAttribute("id", "categoria");
    titulo.setAttribute("id", "titulo-producto");
    img.setAttribute("id", "imagen-producto");
    precio.setAttribute("id", "precio-producto");
    button2.setAttribute("id", e._id)
    {
      /* <div class="tarjeta-producto" id="tarjeta-producto">
          <div class="header-producto">
            <p class="categoria" id="categoria">Categoria</p>
            <p class="titulo-producto" id="titulo-producto">Titulo producto</p>
          </div>
          <div class="contenedor-img">
            <img class="imagen-producto" id="imagen-producto" src="./img/motoe.png" alt="">
          </div>
          <div class="footer-producto">
            <p class="precio-producto" id="precio-producto">$50,000</p>
            <button class="agregar-carrito"><i class="bi bi-pencil-square"></i></button>
            <button class="agregar-carrito"><i class="bi bi-bag-plus-fill"></i></button>
          </div>
</div> */
    }
    //Le agregamos los atributos
    categoria.textContent = e.categoria
    titulo.textContent = e.nombre
    img.setAttribute("src", e.imagen.urlImg)
    precio.textContent = `$${e.precio}`
    // Creamos la estructura de la tarjta
    headerProducto.appendChild(categoria);
    headerProducto.appendChild(titulo);
    contenedorImg.appendChild(img);
    footerProducto.appendChild(precio);
    button.appendChild(i);
    button2.appendChild(i2);
    footerProducto.appendChild(button);
    footerProducto.appendChild(button2);
    tarjetaProducto.appendChild(headerProducto);
    tarjetaProducto.appendChild(contenedorImg);
    tarjetaProducto.appendChild(footerProducto);

    contenedorProductos.append(tarjetaProducto)
    actualizarBotonesAgregar()
  });
};
const actualizarImg = (e) =>{
  const idImg = e.currentTarget.id
  fetch(`http://localhost:3000/api/productos/${idImg}`)
  .then((response) => response.json())
  .then((data) => {
    producto = data
    console.log(producto)
  });
}
function actualizarBotonesAgregar() {
  botonesAgregar = document.querySelectorAll(".editar-img");
  botonesAgregar.forEach(boton => {
    boton.addEventListener("click", actualizarImg);
  });
}
const contenedorProductos = document.querySelector(".contenedor-productos");
fetch("http://localhost:3000/api/productos")
  .then((response) => response.json())
  .then((data) => {
    productos = data.productos;
    mostrarProducto(productos)
  });
