// 예제 12-14 cypress/integration/travel-packing.spec.js 파일의 여행 준비물 앱 사이프레스 테스트

const baseUrl = 'http://localhost:8080/';

function login() {
  cy.visit(baseUrl);
  cy.contains('Username')
    .children('input')
    .type('username');
  cy.contains('Password')
    .children('input')
    .type('password');
  cy.get('button')
    .contains('Login')
    .click();
}

function addCategories() {
  login();

  cy.get('[data-testid=category-name-input]')
    .as('nameInput')
    .type('Clothes');
  cy.get('button')
    .contains('Add Category')
    .click();

  cy.get('@nameInput').type('Toiletries{enter}');
}

function addItems() {
  addCategories();

  cy.get('[data-testid=item-input]')
    .first()
    .as('item-input-1')
    .type('socks');
  cy.get('button')
    .contains('Add Item')
    .first()
    .click();
  cy.get('@item-input-1').type('shoes{enter}');
  verifyStatus('Clothes', '2 of 2 remaining');

  cy.get('[data-testid=item-input]')
    .last()
    .type('razor{enter}');
  verifyStatus('Toiletries', '1 of 1 remaining');
}

function deleteCategory(categoryName) {
  cy.contains(new RegExp(`^${categoryName}$`))
    .siblings('button')
    .click();
}

function deleteItem(itemName) {
  cy.contains(new RegExp(`^${itemName}$`))
    .siblings('button')
    .click();
}

function togglePacked(itemName) {
  cy.contains(new RegExp(`^${itemName}`))
    .siblings('input[type="checkbox"]')
    .click();
}

function verifyStatus(categoryName, expectedStatus) {
  cy.contains(new RegExp(`^${categoryName}$`))
    // 이 기능은 올바른 요소가 있는지 확인하는 데 유용합니다.
    // 일치하는 모든 요소 주위에 빨간색 윤곽선을 그립니다.
    //.then(el => el.css('outline', 'solid red'))
    .siblings('span')
    .contains(expectedStatus);
}

describe('Travel Packing app', () => {
  it('should login', login);

  it('should add categories', addCategories);

  it('should add items', addItems);

  it('should toggle packed', () => {
    addItems();
    verifyStatus('Clothes', '2 of 2 remaining');

    togglePacked('shoes');
    verifyStatus('Clothes', '1 of 2 remaining');

    togglePacked('shoes');
    verifyStatus('Clothes', '2 of 2 remaining');
  });

  it('should delete item', () => {
    addItems();
    verifyStatus('Clothes', '2 of 2 remaining');;

    deleteItem('shoes');
    verifyStatus('Clothes', '1 of 1 remaining');
  });

  it('should delete category', () => {
    addItems();
    verifyStatus('Toiletries', '1 of 1 remaining');

    deleteItem('razor');
    verifyStatus('Toiletries', '0 of 0 remaining');

    const categoryName = 'Toiletries';
    // 해당 분류가 존재하는지 검사합니다.
    cy.get('.categories h2 > span').contains(categoryName);
    deleteCategory(categoryName);
    // 해당 분류가 삭제되어 더는 존재하지 않는지 검사합니다.
    cy.get('.categories h2 > span')
      .contains(categoryName)
      .should('not.exist');
  });

  it('should logout', () => {
    login();
    cy.get('button')
      .contains('Log Out')
      .click();
    cy.contains('Login');
  });
});