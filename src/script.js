{
    const boton = document.getElementById("boton1");
    const color = document.getElementById("color");
    const nombre = document.getElementById("nombre");

    function cambiar() {
        valorTexto = nombre.value;
        boton.textContent = valorTexto;
    }
    boton.addEventListener("click", cambiar);
}