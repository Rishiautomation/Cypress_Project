export function LoginFunction(UserName,Password){

    cy.get('input[name="username"]').type(UserName);
    cy.get('input[name="password"]').type(Password);
    cy.get('input.button').click();
  }
  