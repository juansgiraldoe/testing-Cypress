///<reference types = "cypress"/>

describe('Valiacion del fomrulario.', () => {
  it('Submit al formulario y mostrar el mensaje de error.', ()=>{
    cy.visit('http://127.0.0.1:5500/index.html');

    cy.get('[data-cy=formulario]')
      .submit();

    //Selecionar la alerta.
    cy.get('[data-cy="alerta"]')
      .should('have.class', 'alert-danger')
      .invoke('text')
      .should('equal', 'Todos los campos son Obligatorios')
  });
});
