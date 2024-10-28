$(document).ready(function () {
    // Máscaras
    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            aceitoTermos: {
                required: true
            }
        },
        messages: {
            nome: 'Insira seu nome completo',
            email: 'Insira seu email válido',
            telefone: 'Insira seu telefone',
            aceitoTermos: 'Campo obrigatório'
        },

        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campo(s) pendente(s)`);
            }
        }
    })

    $('button').click(function () {
        const destino = $('cadastro');

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})
