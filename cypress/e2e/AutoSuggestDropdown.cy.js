describe('Auto Suggest Dropdown', () => {

    it('Auto suggest dropdown', () => {

    cy.visit("https://www.wikipedia.org/")

    cy.get('#searchInput').type('Delhi')

    cy.get('.suggestion-title').contains('Delhi University').click()

})

it('Dynamic dropdown', () => {

    cy.visit("https://www.google.com/")

    cy.get("input[name='q']").type('cypress automation')

    cy.get('div.wM6W7d>span').should('have.length', 11)

    cy.get('div.wM6W7d>span').each((Sel, index, $list) => {

        if (Sel.text() == 'cypress automation tool') {

            cy.wrap(Sel).click()

        }

    })

    cy.get("input[name='q']").should('have.value', 'cypress automation tool')

})

})