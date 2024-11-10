const elem = require('./ApontamentoElements').ELEMENTSAPONTAMENTO;


class Apontamentos {

    InserirApontamento() {
        cy.get(elem.DataInicial).type('01/10/2024')
        cy.contains('strong', 'Período Final').click();
        cy.get(elem.DataFinal).type('31/12/2024')
        cy.get(elem.Alocacao).select('SOMA MATRIZ - GROWDEV SERVICOS TECNOLOGIA DA INFORMACAO LTDA');
        cy.get(elem.BtAbrir).click()

    }

    adicionarHorariosTrabalhados() {
        cy.get(elem.entrada0110).type('08:00')
        cy.get(elem.almoco0110).type('12:00')
        cy.get(elem.voltaalmoco0110).type('13:00')
        cy.get(elem.saida0110).type('18:00')


        cy.get(elem.entrada0210).type('08:00')
        cy.get(elem.almoco0210).type('12:00')
        cy.get(elem.voltaalmoco0210).type('13:00')
        cy.get(elem.saida0210).type('18:00')

        cy.get(elem.entrada0310).type('08:00')
        cy.get(elem.almoco0310).type('12:00')
        cy.get(elem.voltaalmoco0310).type('13:00')
        cy.get(elem.saida0310).type('18:00')

        cy.get(elem.entrada0410).type('08:00')
        cy.get(elem.almoco0410).type('12:00')
        cy.get(elem.voltaalmoco0410).type('13:00')
        cy.get(elem.saida0410).type('18:00')

        
    }

}

export default new Apontamentos();






