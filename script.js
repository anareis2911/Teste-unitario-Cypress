document.getElementById('formulario').addEventListener('submit', function(event) {

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value;
  const confirmarSenha = document.getElementById('confirmarSenha').value;
  const mensagem = document.getElementById('mensagem');

  if (!nome || !email || !senha || !confirmarSenha) {
    mensagem.textContent = 'Preencha todos os campos!';
    mensagem.style.color = 'red';
    return;
  }

  if (senha !== confirmarSenha) {
    mensagem.textContent = 'As senhas não coincidem!';
    mensagem.style.color = 'red';
    return;
  }

  mensagem.style.color = 'green';
  mensagem.textContent = 'Formulário enviado com sucesso!';
  
});
