describe('interactuando con los objecots', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  it.skip('click', () => {
    cy.visit('/buttons');
    cy.get('button').eq(3).click();
    cy.get('#dynamicClickMessage')
      .should('be.visible')
      .and('contain', 'You have done a dynamic click');
  });

  it.skip('double click', () => {
    cy.visit('/buttons');
    cy.get('#doubleClickBtn').dblclick();
    cy.get('#doubleClickMessage')
      .should('be.visible')
      .and('contain', 'You have done a double click');
  });

  it.skip('right click', () => {
    cy.visit('/buttons');
    cy.get('#rightClickBtn').rightclick();
    cy.get('#rightClickMessage').should('be.visible').and('contain', 'You have done a right click');
  });

  it.skip('force click', () => {
    cy.visit('/dynamic-properties');
    cy.get('#enableAfter').click({ timeout: 0, force: true });
  });

  it.skip('click por posicion', () => {
    cy.visit('/buttons');
    cy.get('button').eq(3).parent().parent().click('topRight');
    cy.get('button').eq(3).parent().parent().click('bottomLeft');
    cy.get('button').eq(3).parent().parent().click(5, 6);
  });

  it('input type text', () => {
    cy.visit('/automation-practice-form');
    cy.get('#firstName').type('Gerardo');
    cy.get('#lastName').type('Miranda');

    cy.get('#firstName').type('{selectAll}{backspace}');
    cy.get('#firstName').type('another name');
    cy.get('#lastName').clear();
    cy.get('#lastName').type('another last name');
  });

  // ? commons list for type
  // {backspace} Borra el personaje a la izquierda del cursor.
  // {del} Borra el personaje a la derecha del cursor.
  // {downarrow} Mueve el cursor hacia abajo.
  // {end}	Mueve el cursor al final de la línea.
  // {enter} Teclea la tecla Intro.
  // {esc}	Teclea la tecla Escape.
  // {home} Mueve el cursor al principio de la línea.
  // {insert} Inserta un personaje a la derecha del cursor.
  // {leftarrow} Mueve el cursor a la izquierda.
  // {movetoend} Desplaza el cursor al final del elemento mecanizable.
  // {movetostart} Desplaza el cursor al inicio del elemento mecanizable.
  // {pagedown} Se desplaza hacia abajo.
  // {pageup}  Se desplaza hacia arriba.
  // {rightarrow} Mueve el cursor a la derecha.
  // {selectall} Selecciona todo el texto creando un selection range.
  // {uparrow}	Mueve el cursor hacia arriba.
});
