const campoObrigatorio = "Este campo é obrigatório.";

$('.myform').validate({

    rules: {
    nomeVld: {
        required: true,
    },
    celularVld: {
        required: true,
        minlength: 15,
        maxlenght: 15
    },
    emailVld: {
        required: true,
        email: true
    },
    },
    messages: {
        nomeVld: campoObrigatorio,
        celularVld: {
            required: campoObrigatorio,
            minlength: "Forneça um número válido"
        },
        emailVld: {
            required: campoObrigatorio
        },
    }
})

$('#celular').mask('(00)0 0000-0000')

