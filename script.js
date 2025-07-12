// Seleciona o formulário e o botão de envio
const form = document.querySelector('.contato-form');
const submitButton = form.querySelector('button[type="submit"]');

// Função para lidar com o envio do formulário
async function handleSubmit(event) {
  //  Previne o comportamento padrão de recarregar a página
  event.preventDefault();
  
  //  Coleta os dados do formulário
  const data = new FormData(event.target);
  
  // Muda o texto do botão para dar feedback ao usuário
  submitButton.innerText = 'Enviando...';
  submitButton.disabled = true; 

  try {
    //  Envia os dados para o FormSubmit usando a API Fetch
    const response = await fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json' // Pede uma resposta em JSON para o FormSubmit
      }
    });

    
    if (response.ok) {
      
      alert('Email enviado com sucesso!');
      
      form.reset();
    } else {
      
      throw new Error('Houve um problema no envio do formulário.');
    }
  } catch (error) {
    
    console.error(error);
    alert('Erro ao enviar o email. Por favor, tente novamente mais tarde.');
  } finally {
   
    submitButton.innerText = 'Mandar mensagem';
    submitButton.disabled = false;
  }
}


form.addEventListener('submit', handleSubmit);