// 예제 12-13 cypress/integration/TodoList.spec.js의 TodoList 컴포넌트 사이프레스 테스트 코드

const baseUrl = 'http://localhost:8080/';

describe('Todo app', () => {
  it('should add todo', () => {
    cy.visit(baseUrl);
    cy.contains('1 of 2 remaining');
    cy.contains('Add')
      .as('addBtn')
      .should('be.disabled');

    const todoText = 'buy milk';
    cy.get('[data-testid=todo-input]')
      .as('todoInput')
      .type(todoText);
    
    const addBtn = cy.get('@addBtn');
    addBtn.should('not.be.disabled');
    addBtn.click();

    cy.get('@todoInput').should('have.value', '');
    cy.get('@addBtn').should('be.disabled');
    cy.contains(todoText);
    cy.contains('2 of 3 remaining');
  });

  it('should toggle done', () => {
    cy.visit(baseUrl);
    cy.contains('1 of 2 remaining');

    cy.get('input[type=checkbox]')
      .first()
      .as('cb1')
      .click();
    cy.contains('2 of 2 remaining');

    cy.get('@cb1').check();
    cy.contains('1 of 2 remaining');
  });

  it('should delete todo', () => {
    cy.visit(baseUrl);
    cy.contains('1 of 2 remaining');

    const todoText = 'learn Svelte'; // first todo
    cy.contains('ul', todoText);

    cy.contains('Delete').click();
    cy.contains('ul', todoText).should('not.exist');
    cy.contains('1 of 1 remaining');
  });

  it('should archive completed', () => {
    cy.visit(baseUrl);

    const todoText = 'learn Svelte'; // first todo
    cy.contains('ul', todoText);

    cy.contains('Archive Complete').click();
    cy.contains('ul', todoText).should('not.exist');
    cy.contains('1 of 1 remaining');
  });
});