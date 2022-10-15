describe('guardando elementos', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  it('usendo parents', () => {
    cy.visit('/automation-practice-form');
    cy.get(':nth-child(2) > .group-header > .header-wrapper')
      .parents()
      .find('form')
      .then((form) => {
        const inputs = form.find('input');
        const divs = form.find('div');
        const labels = form.find('label');

        expect(inputs.length).to.eq(15);
        cy.wrap(inputs).should('have.length', 15);

        expect(divs.length).to.eq(70);

        expect(labels.length).to.eq(16);
      });
  });
});
