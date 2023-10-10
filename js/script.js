function descargar() {
    // Obtiene los datos del formulario
    const selectedRadio = document.querySelector('input[name="event-type"]:checked');
    const selectedValue = document.getElementById(selectedRadio.getAttribute('id')+'t').innerText;
    const nombre = document.getElementById('nombre').value;
    const localidad = document.getElementById('localidad').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const entrada = document.getElementById('entrada').value;
    const vals = document.getElementById('vals').value;
    const comienzo = document.getElementById('comienzo').value;
    const noFaltar = document.getElementById('noFaltar').value;
    const noEstar = document.getElementById('noEstar').value;
    const torta = document.getElementById('torta').value;
    const momento = document.getElementById('momento').value;

    // Crea un nuevo documento PDF
    const doc = new jsPDF();

    // Añade el encabezado del PDF
    doc.setFontSize(16);
    doc.text(10, 10, 'Formulario de reserva de evento');

    // Añade los datos del formulario al PDF
    doc.setFontSize(12);
    doc.text(10, 20, 'Tipo Evento: ' + selectedValue);
    doc.text(10, 30, 'Nombre o apodo: ' + nombre);
    doc.text(10, 40, 'Localidad y salón: ' + localidad);
    doc.text(10, 50, 'Fecha del evento: ' + fecha);
    doc.text(10, 60, 'Hora del evento: ' + hora);
    doc.text(10, 70, '¿Con qué canción te gustaría entrar?: ' + entrada);
    doc.text(10, 80, '¿Qué vals prefieres?: ' + vals);
    doc.text(10, 90, '¿Con qué canción te gustaría comenzar tu fiesta?: ' + comienzo);
    doc.text(10, 100, '¿Qué música o canción no puede faltar en tu fiesta?: ' + noFaltar);
    doc.text(10, 110, '¿Qué música o canción no debe estar en tu fiesta?: ' + noEstar);
    doc.text(10, 120, '¿Qué canciones prefieres para el corte de la torta?: ' + torta);
    doc.text(10, 130, 'Si hay algún momento especial en tu fiesta, queremos que lo aclares aquí: ' + momento);

    console.log(selectedValue);
    // Guarda el PDF
    doc.save(nombre + '.pdf');
    let texto = `Hola, como estas? Soy ${nombre} esta es mi planilla de evento para la fiesta de el ${fecha}.\nMuchas Gracias!`
    window.location.replace('https://wa.me/59898595425/?text='+texto)
}
