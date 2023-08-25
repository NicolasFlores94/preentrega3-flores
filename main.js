const productos = [
  {nombre:"Fernet", precio: 3000},
  {nombre:"Gancia", precio: 2000},
  {nombre:"Smirnoff", precio: 4000,
  }
];

const shop = document.getElementById("shop")
const verCarrito = document.getElementById(verCarrito)
const modalContainer = document.getElementById("modal-container")
let carrito = []

productos.forEach((producto)=>{
  let caja = document.createElement("div");
  caja.className = "card"
  caja.innerHTML = `
  <h3>${producto.nombre}</h3>
  <p>$${producto.precio}</p>
  `;

  shop.append(caja);

  let comprar = document.createElement("button")
  comprar.innerText = "comprar";
  comprar.className = "comprar"
  caja.append(comprar);

  comprar.addEventListener("click", ()=>{
    carrito.push({
      nombre: productos.nombre,
      precio: productos.precio,
    })
  })

})

verCarrito.addEventListener("click",()=>{
  const modal = document.createElement("div");
  modal.className = "modal-header";
  modal.innerHTML = `
  <h1 class="modal-title">Carrito</h1>`;

  modalContainer.append(modal);

  const modalButton = document.createElement("h1");
  modalButton.innerText = "x";
  modalButton.className = "modal-button";

  modalButton.addEventListener = ("click", ()=>{
    modalContainer.style.display = "none";
  })
  modal.append(modalButton);

  carrito.forEach((producto)=>{
    let carritoContent = document.createElement("div");
    carrito.className = "modal-content";
    carrito.innerHTML = `
    <h3>${producto.nombre}</h3>
    <p>${producto.precio}</p>`;

    modalContainer.append(carritoContent)
  });

  const total = carrito.reduce((acc, el)=>acc + el.precio, 0);  
  const totalCompra = document.createElement("div");
  totalCompra.className = "totalCompra";
  totalCompra.innerHTML= `Total a pagar:$${total}`;
  modalContainer.append(totalCompra);  


})