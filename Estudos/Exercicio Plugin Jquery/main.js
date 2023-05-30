const campoObrigatório = "Este campo é obrigatório.";


$(document).ready(function () {
    // seleciona todos os inputs com a classe "input-validado"
    $('.input-validado').each(function () {
        // adiciona o evento de "keyup" para cada input
        $(this).on('keyup', function () {
            // se o input não estiver vazio, adiciona a classe "active" no label
            if ($(this).val() !== '') {
                $(this).siblings('label').addClass('active');
            } else {
                $(this).siblings('label').removeClass('active');
            }
        });
    });
});

$('form').validate({
    rules: {
        nomeVld: {
            required: true
        },
        celularVld: {
            required: true
        },
        emailVld: {
            required: true,
            email: true
        },
        cpfVld: {
            required: true
        },
        cepVld: {
            required: true
        },
    },
    messages: {
        nomeVld: "Por favor, insira seu nome completo",
        celularVld: campoObrigatório,
        emailVld: {
            required: "Por favor, insira um endereço de e-mail",
            email: "Por favor, digite um email válido."
        },
        cpfVld: campoObrigatório,
        cepVld: campoObrigatório,
    },
    invalidHandler: function (event, validator) {
        // obtém a lista de elementos inválidos
        var invalidElements = validator.invalidElements();

        // adiciona a classe 'error' para cada elemento inválido
        $(invalidElements).each(function () {
            $(this).addClass('error');
            setTimeout(function () {
                $(this).removeClass('error');
            }.bind(this), 500);
        });
    },
});

$('#celular').mask('(00)0 0000-0000')
$('#cpf').mask('000.000.000-00');
$('#cep').mask('00000-000')