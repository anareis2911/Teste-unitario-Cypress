document.getElementById("formCadastro").addEventListener("submit", function(e) {
    e.preventDefault(); // Impede o envio padrão do formulário
  
    const nome = document.getElementById("nome").value.trim();
  
    if (nome) {
      // Salva no localStorage
      localStorage.setItem("nomeCadastrado", nome);
  
      // Mostra mensagem
      document.getElementById("mensagem").textContent = "Nome cadastrado com sucesso!";
  
      // Limpa o campo
      document.getElementById("formCadastro").reset();
    } else {
      document.getElementById("mensagem").textContent = "Por favor, insira um nome válido.";
    }
  });
  