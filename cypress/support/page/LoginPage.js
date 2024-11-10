const elem = require('./LoginElements').ELEMENTS;


class Login {

    loginSuccess() {
        cy.get(elem.inputCPF).type('04424886026')
        cy.get(elem.inputCPF).type(Cypress.env('CPF_TESTE'));
        cy.get(elem.inputPassword).type('04112000')
        cy.get(elem.btnLogin).click()
        cy.get(elem.imgApontamento).click()
    }

}

export default new Login();





