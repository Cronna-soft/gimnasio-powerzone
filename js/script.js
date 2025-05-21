window.addEventListener('load', function () {
    console.log('Diseñado por CRONNA SOFT');

    // FECHA AÑO ACTUAL
    document.getElementById('añoActual').textContent = new Date().getFullYear();

	// LOGICA BOTON SUBIR
	window.onscroll = function () {
        var btnSubir = document.getElementById("btnSubir");
        if (document.documentElement.scrollTop > 300) {
            btnSubir.style.display = "flex";
        } else {
            btnSubir.style.display = "none";
        }
    };
    // Función para volver arriba suavemente
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    btnSubir.addEventListener('click', () => { 
        scrollToTop() 
        btnSubir.style.display = "none"
    })

    // Scroll suave para algunos navegadores
    document.querySelectorAll('a[href^="#"').forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) { target.scrollIntoView({behavior:"smooth"}) }
        });
    })

});