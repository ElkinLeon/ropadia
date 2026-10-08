# Ropa al Día

Proyecto de tienda de ropa con HTML, CSS y JavaScript para clase de Desarrollo web.

## Abrir la página

Abre `index.html` en el navegador. No hace falta instalar nada. Las imágenes están guardadas en el proyecto.

## Archivos

- `index.html`: contenido, productos, botones y carrito.
- `estilos.css`: colores, tamaños y adaptación a celular.
- `js/app.js`: menú y funciones del carrito.
- `imagenes`: fotografías y logo.

## Funciones

En pantallas pequeñas, el botón Menú abre y cierra la navegación usando `classList.toggle()`.

Los botones de los productos tienen `data-id`, `data-nombre` y `data-precio`. Al pulsarlos, JavaScript lee esos datos, crea un elemento con `createElement()` y lo agrega a la lista con `appendChild()`.

La variable `total` suma el precio al agregar una prenda y lo resta al eliminarla. Cada clic agrega una unidad en una fila nueva, incluso si la prenda ya estaba en el carrito.

El botón Eliminar quita una fila. Vaciar carrito borra todas las filas y deja el total en cero.

El carrito no guarda datos al recargar ni procesa compras reales. El negocio y los datos de contacto son ficticios.

## Comprobar el funcionamiento

1. Agrega una camiseta y un jean: el total debe ser $120.000.
2. Agrega otra camiseta: debe subir a $155.000.
3. Elimina una camiseta: debe quedar en $120.000.
4. Vacía el carrito: debe quedar en $0 y mostrar que está vacío.
5. En una pantalla de celular, abre y cierra el menú con el botón Menú.

## Imágenes

Fotos: Nothing Ahead, Marina Podrez y Ron Lach en Pexels; TuanAnh Blue y kemal alkan en Unsplash.

Icono de camiseta: [OpenMoji](https://openmoji.org/library/emoji-1F455/), [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
