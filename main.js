const productos = [
  { id: 1, nombre: "fernet", precio: 3000 },
  { id: 2, nombre: "gancia", precio: 2500 },
  { id: 3, nombre: "smirnoff", precio: 4000 },
];

localStorage.setItem("productos", productos)

 // Variables para el carrito
 const carrito = [];
 let total = 0;

 // Función para agregar un producto al carrito
 function AgregarCarrito(producto, precio) {
     carrito.push({ nombre: producto, precio: precio });
     ActualizarCarrito();
 }

sessionStorage.setItem("carrito", ActualizarCarrito)

 // Función para actualizar el carrito y el total
 function ActualizarCarrito() {
     const carrito2 = document.getElementById("carro");
     const carros = document.getElementById("carro-total");

     carrito2.innerHTML = "";
     total = 0;

     carrito.forEach((item) => {
         const cartItem = document.createElement("div");
         cartItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
         cartElement.appendChild(cartItem);
         total += item.price;
     });

     cartTotalElement.textContent = total.toFixed(2);
 }

 let botones = document.querySelectorAll(".btnprincipal");

botones.forEach(boton => {
  boton.addEventListener("click", respuestaClick);
});

function respuestaClick() {
  alert("Añadido al carrito");
}
