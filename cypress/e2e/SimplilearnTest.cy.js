describe('Validate the all the scenarios for the simplilearn', () => {

  beforeEach(() => {
    cy.visit('https://www.simplilearn.com/');
  })

  it('passes', () => {
    cy.get('a.login').click();
    cy.get('input.email').type('abc@xyz.com');
    cy.get('input#password').type('Abcd123');
    cy.get('input#remember-me').click();
    cy.get('input[title="Login"]').click();

  })

  it('Validate Login Failure', () => {
    cy.get('a.login').click();
    cy.get('input.email').type('abc@xyz.com');
    cy.get('input#password').type('Abcd@123');
    cy.get('input#remember-me').click();
    cy.get('input[title="Login"]').click();
    cy.get('div#msg_box').contains('The email or password you have entered is invalid.');
  })

})
describe('This file will cover all the Simplilearn Login Test scenarios', () => {
  
  beforeEach(() => {
    cy.visit('https://www.simplilearn.com/');
  })

  it('Validate Login Success', () => {
    LoginFunction('abc@xyz.com','Abc123');
  })

  it('Validate Login Failure', () => {

    LoginFunction('abc@xyz.com','Wrong@passord123');
    cy.get('div#msg_box').contains('The email or password you have entered is invalid.');
  })

})

function LoginFunction(UserName,Password){

  cy.get('a.login').click();
    cy.get('input.email').type(UserName);
    cy.get('input#password').type(Password);
    cy.get('input#remember-me').click();
    cy.get('input[title="Login"]').click();

}
