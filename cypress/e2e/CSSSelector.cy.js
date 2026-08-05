describe('CSSLocators', () => {

  it("csslocators", () => {

    cy.visit("https://sparklecartonline.com/")

    cy.get(".header__active-menu-item").click()   // class - # tag is optional

    cy.get("#YQNum").type("#639659978955")         // id      tag is optional

    cy.get("#YQNum").contains("#36963366666")    // Assertion

  })

})