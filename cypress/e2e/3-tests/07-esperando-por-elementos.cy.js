describe('Esperando por elementos', () => {
  beforeEach(() => {
    cy.visit('https://platzi.com');
  });

  it('Esperar por un tiempo definido', () => {
    cy.wait(5000);
  });

  it('Esperar por un elemento', () => {
    cy.get('.ButtonLogin-cta', { timeout: 6000 });
  });

  it('Esperar por un elemento y hacer una asercion', () => {
    // cy.get('.ButtonLogin-cta', { timeout: 6000 }).should('be.visible');
    cy.get('.ButtonLogin-cta').should('be.visible', { timeout: 6000 });
  });
});

describe('Esperando por elementos', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it.only('desabilitar el retry', () => {
    // cy.get('.banner-image444', { timeout: 5000 });
    // cy.get('.banner-image444', { timeout: 0 });
    // cy.get(':nth-child(3) .card-body', { timeout: 5000 });
    cy.get(':nth-child(3) .card-body', { timeout: 0 });
  });
});
