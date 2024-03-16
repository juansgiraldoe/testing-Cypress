/// <reference types = "cypress"/>

//Agrupar pruebas
describe('Carga la pagina principal.', () => {
  it('Carga el homepage.', () => {
    cy.visit('http://127.0.0.1:5500/index.html');

    //Verificar el elemento y su texto.
    cy.contains('[data-cy="titulo-proyecto"]', 'Administrador de Pacientes de Veterinaria');

    //Verificar si existe el elemento.
    cy.get('[data-cy="titulo-proyecto"]').should('exist');
    //Buenas practicas con uso de selectores.

    //Verificar que exista un elemento y contenga un texto en especifico.
    cy.get('[data-cy="titulo-proyecto"]')
      .invoke('text')
      .should('equal', 'Administrador de Pacientes de Veterinaria');

    //Verificar el texto de las citas.
    cy.get('[data-cy=appointments-title]')
      .invoke('text')
      .should('equal', 'No hay Citas, comienza creando una');
    
      cy.get('[data-cy=appointments-title]')
      .invoke('text')
      .should('not.equal', 'Citas');

  });
});