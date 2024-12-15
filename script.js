document.querySelector('.contato-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio real do formulário
  
    // Aqui você pode incluir a lógica para enviar o email (se necessário)
    
    // Exibe a notificação
    alert('Email enviado com sucesso!');
    
    // Limpa os campos do formulário após o envio
    document.querySelector('.contato-form').reset();
  });