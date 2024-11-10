const elem = require('./ApontamentoElements').ELEMENTSAPONTAMENTO;


class Apontamentos {

    InserirApontamento() {
        cy.get(elem.DataInicial).type('01/10/2024')
        cy.contains('strong', 'Período Final').click();
        cy.get(elem.DataFinal).type('31/12/2024')
        cy.get(elem.Alocacao).select('SOMA MATRIZ - GROWDEV SERVICOS TECNOLOGIA DA INFORMACAO LTDA');
        cy.get(elem.BtAbrir).click()

        
        
        

    }

}

export default new Apontamentos();






