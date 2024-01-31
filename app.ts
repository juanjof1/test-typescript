interface FormData {
    name: string;
    email: string;
    submit: string;
}

function SubmitForm() {
    const form = document.getElementById('myform') as HTMLFormElement;

    if (form.checkValidity()) {
        const  FormData = {
            name: (document.getElementById('name') as HTMLInputElement).value,
            email: (document.getElementById('email') as HTMLInputElement).value,
            submit: (document.getElementById('button')as HTMLInputElement).value,
        };

        console.log('Datos del formulario:', FormData);
    }else {
        alert('Por favor, completar todos los campos correctamente');
    }
}