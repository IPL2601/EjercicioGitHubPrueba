{
    const boton = document.getElementById("boton1");
    const color = document.getElementById("color");
    const nombre = document.getElementById("nombre");

    function cambiar() {
        const valorColor = color.value;
        boton.style.backgroundColor = valorColor;
        
        valorTexto = nombre.value;
        boton.textContent = valorTexto;
    }
    boton.addEventListener("click", cambiar);
}