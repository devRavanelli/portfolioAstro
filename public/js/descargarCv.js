document.querySelector(".btn-cv").addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = "/SammyOdehCV2025.pdf"; // Ruta accesible desde la carpeta /public
    link.download = "SammyOdehCV2025.pdf"; // Nombre del archivo al descargar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});