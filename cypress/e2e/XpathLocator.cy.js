describe('XPathLocators', () => {

    it('find no of products', () => {

        cy.visit("https://sparklecartonline.com/")
        cy.xpath("//img[@alt='SparkleCart ']").title().should('eq','Sparkle Cart – SparkleCart')

    })

    it('chained xpath', () => {

        cy.visit("https://sparklecartonline.com/")
        cy.xpath("//span[@class='header__active-menu-item']")
           .should('contain.text', 'Home')


    })

})