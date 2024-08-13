document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('hugaoForm');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.getElementById('name').value;
        const email = document.getElementById('e-mail').value;
        const mensagem = document.getElementById('message').value;

        // Criando Chave de Criptografia    
        const CryptoJS = require('crypto-js');
        const chave = 'PROTECTIO_KEY'

        //CRIPTOGRAFIA
         const nome_criptografado =  CryptoJS.AES.encrypt(nome,chave).toString();
         const email_criptografado =  CryptoJS.AES.encrypt(e-mail,chave).toString();
         const mensagem_criptografado =  CryptoJS.AES.encrypt(mensagem,chave).toString();

        // Criação do HTML para exibição dos dados
        const resultHTML = `
            <h2>Dados Criptografadas</h2>
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>E-mail:</strong> ${email}</p>
            <p><strong>Mensagem:</strong> ${mensagem}</p>
        `;

        // Exibe os dados na div result
        resultDiv.innerHTML = resultHTML;
    });
});