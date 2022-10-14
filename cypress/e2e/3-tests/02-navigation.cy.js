describe('Primer Suite de Pruebas', () => {
  it('primer prueba', () => {
    cy.visit('https://platzi.com');
  });

  it('recargar la pagina', () => {
    cy.reload();
  });

  it('recargar la pagina de forma forzada', () => {
    cy.visit('https://google.com');
    cy.reload(true);
  });

  it.only('navegar hacia atras', () => {
    cy.visit('https://google.com');
    cy.visit('https://www.google.com/search?q=youtube&oq=youtube&aqs=chrome.0.0i67i131i355i433j46i67i131i199i433i465j0i67l3j69i60l3.1716j0j4&sourceid=chrome&ie=UTF-8');
    cy.go('back');
    cy.go('forward');
  });
});
