import { getGreeting } from '../support/app.po';

describe('converter', () => {
  beforeEach(() => cy.visit('/'));

  it('should show a result', () => {
    cy.get('[data-cy="input"]').click().type('50');

    cy.get('[data-cy="select"]').click();

    cy.get('[data-cy="option"]')
      .eq(3) // get fourth element
      .click();

    cy.get('[data-cy="result"]').should('be.visible');
  });
});
