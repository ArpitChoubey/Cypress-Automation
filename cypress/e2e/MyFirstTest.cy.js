describe('My First Test',() => {
    it ('Verify title',() => {
        cy.visit('https://sparklecartonline.com/')
        cy.title().should('eq','Sparkle Cart – SparkleCart')
        

    })
})