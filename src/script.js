{
    const boton = document.getElementById("boton1");
    const color = document.getElementById("color");
    const nombre = document.getElementById("nombre");

    function cambiar() {
        const valorColor = color.value;
        boton.style.backgroundColor = valorColor;
    }
    boton.addEventListener("click", cambiar);
}