document.addEventListener('DOMContentLoaded', function() {
    const productoSelect = document.getElementById('producto');
    const opcionesTortas = document.getElementById('opciones-tortas');
    const opcionesGalletas = document.getElementById('opciones-galletas');

    // Evento que se dispara cuando se cambia el producto seleccionado
    productoSelect.addEventListener('change', function() {
        const producto = productoSelect.value;

        // Ocultar ambas secciones primero
        opcionesTortas.style.display = 'none';
        opcionesGalletas.style.display = 'none';

        // Mostrar la sección correspondiente al producto seleccionado
        if (producto === 'tortas') {
            opcionesTortas.style.display = 'block';
        } else if (producto === 'galletas') {
            opcionesGalletas.style.display = 'block';
        }
    });

    // Para manejar el envío del formulario y redirigir a WhatsApp
    const form = document.getElementById('order-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const producto = productoSelect.value;
        let mensaje = `Hola, quisiera hacer un pedido:\nProducto: ${producto}\n`;

        if (producto === 'tortas') {
            const tamano = document.getElementById('tamano-torta').value;
            const masa = document.getElementById('masa-torta').value;
            const relleno = document.getElementById('relleno-torta').value;
            const crema = document.getElementById('crema-torta').value;
            const foto = document.getElementById('foto').files[0];

            mensaje += `Tamaño: ${tamano}\nMasa: ${masa}\nRelleno: ${relleno}\nCrema: ${crema}\nFoto del diseño: ${foto ? 'Sí' : 'No'}`;
        } else if (producto === 'galletas') {
            const sabor = document.getElementById('sabor-galletas').value;
            const cantidad = document.getElementById('cantidad-galletas').value;

            mensaje += `Sabor: ${sabor}\nCantidad: ${cantidad}`;
        }

        const numeroWhatsApp = '+573115026048';
        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
        window.location.href = url;
    });
});