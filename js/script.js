window.onload = function() {
    const form = document.getElementById('form-contato');
    
    form.onsubmit = function(e) {
        e.preventDefault(); 
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;
        
        if (!nome || !email || !mensagem) {
            alert('Por favor, preencha todos os campos!');
            return;
        }
        
        if (!email.includes('@')) {
            alert('Por favor, insira um email válido!');
            return;
        }
        
        alert('Enviando mensagem...');
        
        enviarMensagem(nome, email, mensagem);
    };
    
    function enviarMensagem(nome, email, mensagem) {
        const apiUrl = 'https://formspree.io/f/xkgbdwwg';
        
        const dados = {
            name: nome,
            _replyto: email,
            message: mensagem,
            _subject: 'Nova mensagem do portfólio'
        };
        
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(dados)
        })
        .then(response => {
            if (response.ok) {
                alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
                form.reset();
            } else {
                alert('Ocorreu um erro. Tente novamente mais tarde.');
            }
        })
        .catch(error => {
            alert('Erro de conexão. Verifique sua internet e tente novamente.');
        });
    }
};

