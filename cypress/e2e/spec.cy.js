describe('Formulário de Cadastro de Nome', () => {
  it('Preenche o nome e clica no botão Cadastrar', () => {

    cy.visit('http://localhost:5500/index.html');

    cy.get('#nome').type('João Silva');

    cy.get('input[type="submit"]').click();

    cy.get('#mensagem').should('contain', 'Nome cadastrado com sucesso!');
  });
});
