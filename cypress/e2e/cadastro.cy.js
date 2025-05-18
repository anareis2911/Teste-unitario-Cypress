describe('Testes do Formulário de Cadastro', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500/index.html'); 
  });

  it('Deve exibir todos os campos corretamente', () => {
    cy.get('input#nome').should('be.visible');
    cy.get('input#email').should('be.visible');
    cy.get('input#senha').should('be.visible');
    cy.get('input#confirmarSenha').should('be.visible');
    cy.get('button[type="submit"]').should('be.visible');
  });

  it('Deve permitir o envio com dados válidos', () => {
    cy.get('#nome').type('João da Silva');
    cy.get('#email').type('joao@email.com');
    cy.get('#senha').type('senha123');
    cy.get('#confirmarSenha').type('senha123');
    cy.get('form').submit();

    cy.get('#mensagem')
      .should('be.visible')
      .and('contain', 'Formulário enviado com sucesso');
  });

  it('Deve mostrar erro ao submeter com campos vazios', () => {
    cy.get('form').submit();

    cy.get('#mensagem')
      .should('be.visible')
      .and('contain', 'Preencha todos os campos');
  });

  it('Deve mostrar erro se as senhas forem diferentes', () => {
    cy.get('#nome').type('Maria Souza');
    cy.get('#email').type('maria@email.com');
    cy.get('#senha').type('abc123');
    cy.get('#confirmarSenha').type('diferente123');
    cy.get('form').submit();

    cy.get('#mensagem')
      .should('be.visible')
      .and('contain', 'As senhas não coincidem');
  });
});
