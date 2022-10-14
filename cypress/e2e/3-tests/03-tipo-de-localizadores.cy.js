describe('tipos de localizadores', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });

  it('Obteniendo por un tag', () => {
    cy.visit('/automation-practice-form');
    cy.get('#userName-wrapper > .col-md-3');
  });

  it('Obteniendo por un atributo', () => {
    cy.get(':nth-child(4) > .group-header > .header-wrapper');
  });

  it('Obteniendo por un atributo y tag', () => {
    cy.get('#firstName');
  });

  // it('Obteniendo por un id', () => {
  //   cy.get('#firstName');
  // });

  it('Obteniendo por un class', () => {
    // cy.once('uncaught:exception', () => false);
    cy.contains('Forms');
  });
});
