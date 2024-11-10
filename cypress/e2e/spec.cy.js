
import Login from '../support/page/LoginPage'
import Apontamentos from '../support/apontamentoPage/ApontamentoPage'

describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://soma.coop.br/EMW/Login.aspx')

    Cypress.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes('iCheck is not a function')) {
        return false; // Impede que o Cypress falhe o teste devido a esse erro
      }
    });

    Cypress.on('uncaught:exception', (err, runnable) => {
      // Verifica se o erro inclui a mensagem 'verifica_datas is not defined'
      if (err.message.includes('verifica_datas is not defined')) {
        return false; // Retorna false para impedir que o Cypress falhe o teste
      }
    });
    
    
  })


  it('Login sucesso', () => {
    Login.loginSuccess()
    Apontamentos.InserirApontamento()
   
  })


})