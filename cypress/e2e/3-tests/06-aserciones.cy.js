describe('aserciones', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  it('Asercion', () => {
    cy.visit('/automation-practice-form');
    cy.url().should('include', 'demoqa.com');
    // cy.get('#firstName').should('be.visible').should('have.attr', 'placeholder', 'First Name');
    cy.get('#firstName').should('be.visible').and('have.attr', 'placeholder', 'First Name');
  });

  it('Asercion 2', () => {
    cy.visit('/automation-practice-form');
    cy.url().should('include', 'demoqa.com');
    cy.get('#firstName').then((element) => {
      expect(element).to.be.visible;
      expect(element).to.have.attr('placeholder', 'First Name');
    });
  });

  it('Asercion 3', () => {
    cy.visit('/automation-practice-form');
    cy.url().should('include', 'demoqa.com');
    cy.get('#firstName').then((element) => {
      assert.equal(element.attr('placeholder'), 'First Name');
    });
  });
});
