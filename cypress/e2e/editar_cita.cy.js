///<reference types = "cypress"/>

describe('LLenar los campos para crear y mostrar la edita.', () => {
  it('Campos nueva cita.', ()=>{
    cy.visit('/index.html');
  
    cy.get('[data-cy=mascota-input]')
      .type('Hook');
      
      cy.get('[data-cy=propietario-input]')
      .type('Juan');
      
      cy.get('[data-cy=telefono-input]')
      .type('852741');
      
      cy.get('[data-cy=fecha-input]')
      .type('2024-05-10');
      
      cy.get('[data-cy=hora-input]')
      .type('10:45');
      
      cy.get('[data-cy=sintomas-input]')
      .type('Come y duerme mucho.');
      
      cy.get('[data-cy=submit-cita]')
      .click();
      
      cy.get('[data-cy=appointments-title]')
      .invoke('text')
      .should('equal', 'Administra tus Citas');
      
      cy.get('[data-cy="alerta"]')
      .should('have.class', 'alert-success')
      .invoke('text')
      .should('equal', 'Se agregó correctamente')
    });
    
    it('Edita la cita', () => {
      cy.get('[data-cy="btn-editar"]').click();
      
      cy.get('[data-cy=mascota-input]').clear().type('Honey');
      cy.get('[data-cy=propietario-input]').clear().type('Lndsay');
      cy.get('[data-cy=hora-input]').clear().type('14:45');
      
      cy.get('[data-cy=submit-cita]').click();
      
      cy.get('[data-cy="alerta"]')
      .should('have.class', 'alert-success')
      .invoke('text')
      .should('equal', 'Guardado Correctamente')
  });
  
});