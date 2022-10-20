describe('interactuando con los objecots', () => {
  let texto;

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

  it.skip('input type text', () => {
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

  it.skip('chackboxes y readio buttons', () => {
    cy.visit('/automation-practice-form');
    // cy.get('#gender-radio-1').click({ force: true });
    // cy.get('#gender-radio-1').check();
    cy.get('label[for="gender-radio-1"]').click();

    // cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(2) > .custom-control-label').click();
    cy.get('label[for="hobbies-checkbox-2"]').click({ force: true });
    cy.get('label[for="hobbies-checkbox-2"]').click({ force: true });
  });

  it.skip('extrayendo informacion', function () {
    cy.visit('/automation-practice-form');
    cy.get('#firstName').as('nombre');
    cy.get('@nombre').type('Gerardo');

    cy.get('@nombre').then((nombre) => {
      texto = nombre.val();
      expect(texto).to.eq('Gerardo');
    });
    cy.get('@nombre').invoke('val').should('equal', 'Gerardo');
    cy.get('@nombre').invoke('val').as('nombreGlobal');
  });

  it.skip('Compartir info', function () {
    cy.visit('/automation-practice-form');
    // cy.get('#lastName').as('nombre2');
    // cy.get('@nombre2').type(texto);

    // cy.get('@nombre2').then((nombre) => {
    //   expect(nombre.val()).to.eq(texto);
    // });

    cy.get('#lastName').as('nombre2');
    cy.get('@nombre2').type(texto);
    cy.get('#firstName').type(this.nombreGlobal);
  });

  it.skip('interactuando con los dropdown', function () {
    cy.visit('https://itera-qa.azurewebsites.net/home/automation');
    // cy.get('.custom-select').select(10)
    cy.get('.custom-select').select('Italy').should('have.value', '6');
  });

  it.skip('interactuando con los dropdown', function () {
    cy.visit('https://react-select.com/home');
    cy.get('#react-select-6-input').type(' ');
    cy.get('#react-select-6-listbox')
      .children()
      .children()
      .each((element, index, list) => {
        if (element.text === 'Red') {
          // element.on('click');
          element.click();
        }
      });
    cy.get('#react-select-6-option-3').click();
  });

  it.skip('trabajando con tablas', function () {
    cy.visit('https://www.w3schools.com/html/html_tables.asp');
    cy.get('#customers')
      .find('th')
      .each((element) => {
        cy.log(element.text());
      });

    cy.get('#customers').find('th').first().invoke('text').should('equal', 'Company');

    cy.get('#customers').find('th').eq(2).invoke('text').should('equal', 'Country');

    cy.get('#customers').find('tr').should('have.length', 7);

    cy.get('#customers')
      .find('tr')
      .eq(1)
      .find('td')
      .eq(1)
      .invoke('text')
      .should('equal', 'Maria Anders');
    // .then((element) => {});
  });

  it.skip('trabajando con modals', function () {
    cy.visit('/modal-dialogs');
    cy.get('#showSmallModal').click();
    cy.get('#closeSmallModal').click();
  });

  it.skip('trabajando con confim', function () {
    cy.visit('/alerts');

    // const stub = cy.stub();
    // cy.on('window:confirm', stub);
    // cy.get('#confirmButton')
    //   .click()
    //   .then((e) => {
    //     expect(stub.getCall(0)).to.be.calledWith('Do you confirm action?');
    //   });

    // cy.contains('You selected Ok').should('exist')

    cy.get('#confirmButton').click();
    cy.on('window:confirm', (confirm) => {
      expect(confirm).to.equal('Do you confirm action?');
    });

    cy.contains('You selected Ok').should('exist');

    // cy.on('window:confirm', (confirm) => {
    //   expect(confirm).to.equal('Do you confirm action?');
    //   return false;
    // });
    // cy.contains('You selected Cancel').should('exist');
  });

  it.skip('trabajando con tool-tips', function () {
    cy.visit('/tool-tips');
    cy.get('#toolTipButton').trigger('mouseover');
    cy.contains('You hovered over the Button').should('exist');
    cy.get('#toolTipButton').trigger('mouseout');
    cy.contains('You hovered over the Button').should('not.exist');
  });

  it('Interactuando con drag and drops', () => {
    cy.visit('https://demoqa.com/dragabble');
    cy.get('#dragBox')
      .trigger('mousedown', { which: 1, pageX: 0, pageY: 0 })
      .trigger('mousemove', { which: 1, pageX: 200, pageY: 200 })
      .trigger('mouseup');
  });
});
