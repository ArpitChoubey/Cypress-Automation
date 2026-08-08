describe('Checkbutton', () => {

  it("Checkbutton", () => {

    cy.visit("https://testautomationpractice.blogspot.com/")

    cy.get("//input[@id='monday']").should('be.visible')

    cy.get("//input[@id='monday']").check().should('be.checked')

    //UnSelecting checkbox
    cy.get("//input[@id='monday']").uncheck().should('not.be.checked')

    //Selecting all the check boxes
cy.get("div.form-check form-check-inline").check().should('be.checked')
cy.get("div.form-check form-check-inline").uncheck().should('not.be.checked')

    // Select first and last checkboxes 
   cy.get("div.form-check form-check-inline").first().check()
   cy.get("div.form-check form-check-inline").last().check()



    })

})