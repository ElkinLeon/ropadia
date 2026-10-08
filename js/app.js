var botonMenu = document.getElementById("boton-menu");
var menu = document.getElementById("menu");
var botonesAgregar = document.querySelectorAll(".agregar");
var listaCarrito = document.getElementById("lista-carrito");
var textoTotal = document.getElementById("total");
var mensajeVacio = document.getElementById("carrito-vacio");
var botonVaciar = document.getElementById("vaciar-carrito");
var avisoCarrito = document.getElementById("aviso-carrito");
var total = 0;

document.body.classList.add("con-javascript");

botonMenu.addEventListener("click", function () {
    menu.classList.toggle("abierto");
    botonMenu.setAttribute("aria-expanded", menu.classList.contains("abierto"));
});

function actualizarCarrito() {
    textoTotal.textContent = total.toLocaleString("es-CO");
    mensajeVacio.hidden = listaCarrito.children.length > 0;
    botonVaciar.disabled = listaCarrito.children.length == 0;
}

function agregarProducto() {
    var identificador = this.dataset.id;
    var nombre = this.dataset.nombre;
    var precio = Number(this.dataset.precio);
    var producto = document.createElement("li");
    var texto = document.createElement("span");
    var botonEliminar = document.createElement("button");

    producto.dataset.id = identificador;
    texto.textContent = nombre + " - $" + precio.toLocaleString("es-CO");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.type = "button";
    botonEliminar.setAttribute("aria-label", "Eliminar " + nombre);

    botonEliminar.addEventListener("click", function () {
        listaCarrito.removeChild(producto);
        total = total - precio;
        actualizarCarrito();
        avisoCarrito.textContent = "Se eliminó: " + nombre + ".";
    });

    producto.appendChild(texto);
    producto.appendChild(botonEliminar);
    listaCarrito.appendChild(producto);
    total = total + precio;
    actualizarCarrito();
    avisoCarrito.textContent = "Se agregó: " + nombre + ". Puedes verlo en el carrito.";
}

for (var i = 0; i < botonesAgregar.length; i++) {
    botonesAgregar[i].addEventListener("click", agregarProducto);
}

botonVaciar.addEventListener("click", function () {
    listaCarrito.innerHTML = "";
    total = 0;
    actualizarCarrito();
    avisoCarrito.textContent = "Se vació el carrito.";
});
