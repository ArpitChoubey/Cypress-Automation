describe('handle dropdowns', () => {

    it.skip('Dropdown with select', () => {

        cy.visit("https://www.zoho.com/commerce/free-demo.html")

        cy.get('#zcf_address_country')
            .select('Italy')
            .should('have.value', 'Italy')

    })

    it('Dropdown without select', () => {

        cy.visit("https://www.zoho.com/commerce/free-demo.html")

        cy.get('#zcf_address_country')
            .select('Italy')
            .should('have.value', 'Italy')

    })

})