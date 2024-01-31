function SubmitForm2() {
    var form = document.getElementById('myform');
    if (form.checkValidity()) {
        var FormData_1 = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            submit: document.getElementById('button').value,
        };
        console.log('Datos del formulario:', FormData_1);
    }
    else {
        alert('Por favor, completar todos los campos correctamente');
    }
}
