describe('Radiobutton', () => {

  it("Radiobutton", () => {

    cy.visit("https://testautomationpractice.blogspot.com/")

    cy.get("//input[@id='male']").should('be.visible')

    cy.get("//input[@id='female']").should('be.visible')

    cy.get("//input[@id='male']").check().should('be.checked')
    cy.get("//input[@id='female']").should('not.be.checked')

    cy.get("//input[@id='female']").check().should('be.checked')
    cy.get("//input[@id='male']").should('not.be.checked')



  })

})