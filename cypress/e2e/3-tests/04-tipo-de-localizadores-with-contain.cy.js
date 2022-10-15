describe('tipos de localizadores', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  it('Obteniendo por un tag', () => {
    cy.visit('/automation-practice-form');
  });

  it('Obteniendo por un class', () => {
    cy.contains('.header-text', 'Elements');
  });

  it('usendo parents', () => {
    cy.get(':nth-child(2) > .group-header > .header-wrapper').parent();
    cy.get(':nth-child(2) > .group-header > .header-wrapper').parents();
    cy.get(':nth-child(2) > .group-header > .header-wrapper').parents().find('label');
  });

  it('encontrar un elemento', () => {
    cy.get('form').find('label');
  });
});
