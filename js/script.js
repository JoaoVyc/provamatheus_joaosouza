// Script para validar o formulário de contato.

// Executa quando a página é totalmente carregada.
document.addEventListener('DOMContentLoaded', function() {
    const formulario_contato_xd = document.getElementById('formulario_contato_xd');


    if (formulario_contato_xd) {
        formulario_contato_xd.addEventListener('submit', function(evento) {
            evento.preventDefault(); 
            validar_form_xd(); 
        });
    }

    //valida
    function validar_form_xd() {
        const campo_nome = document.getElementById('nome');
        const campo_email = document.getElementById('email');
        const campo_assunto = document.getElementById('assunto');
        const campo_mensagem = document.getElementById('mensagem');
        const feedback_formulario = document.getElementById('feedback_formulario');

        const erro_nome = document.getElementById('erro_nome');
        const erro_email = document.getElementById('erro_email');
        const erro_assunto = document.getElementById('erro_assunto');
        const erro_mensagem = document.getElementById('erro_mensagem');

        let formulario_valido = true;
        erro_nome.textContent = '';
        erro_email.textContent = '';
        erro_assunto.textContent = '';
        erro_mensagem.textContent = '';
        feedback_formulario.textContent = '';
        feedback_formulario.className = 'mensagem-feedback';

        ///valida
        if (campo_nome.value.trim() === '') {
            erro_nome.textContent = 'Nome é obrigatório.';
            formulario_valido = false;
        }

       //valida
        const regex_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (campo_email.value.trim() === '') {
            erro_email.textContent = 'E-mail é obrigatório.';
            formulario_valido = false;
        } else if (!regex_email.test(campo_email.value.trim())) {
            erro_email.textContent = 'Formato de e-mail inválido.';
            formulario_valido = false;
        }

        //valida
        if (campo_assunto.value.trim() === '') {
            erro_assunto.textContent = 'Assunto é obrigatório.';
            formulario_valido = false;
        }

        //valida
        if (campo_mensagem.value.trim() === '') {
            erro_mensagem.textContent = 'Mensagem é obrigatória.';
            formulario_valido = false;
        } else if (campo_mensagem.value.trim().length < 20) {
            erro_mensagem.textContent = 'Mensagem deve ter no mínimo 20 caracteres.';
            formulario_valido = false;
        }

        // Exibe feedback final.
        if (formulario_valido) {
            feedback_formulario.textContent = 'Mensagem enviada com sucesso! XD';
            feedback_formulario.classList.add('sucesso');
            formulario_contato_xd.reset(); 
        } else {
            feedback_formulario.textContent = 'Por favor, corrija os erros.';
            feedback_formulario.classList.add('erro');
        }
    }
});
