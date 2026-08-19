/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

Cypress.Commands.add('getIframe', (iframe) => {
    return cy.get(iframe)
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);
});


// Custom command for Clicking on link using label
Cypress.Commands.add('clickLink', (label) => {
    cy.get('a').contains(label).click();
});


// Custom query for Overwriting existing contains query
Cypress.Commands.overwriteQuery('contains',
    (originalFn, subject, filter, text, options = {}) => {

        // determine if a filter argument was passed
        if (typeof text === 'object') {
            options = text;
            text = filter;
            filter = undefined;
        }

        options.matchCase = false;

        return originalFn(subject, filter, text, options);
    }
);


// Custom command for login
Cypress.Commands.add("loginapp", (email, password) => {
    cy.get('#Email').clear();
    cy.get('#Email').type(email);
    cy.get('#Password').clear();
    cy.get('#Password').type(password);
    cy.get("button[class='button-1 login-button']").click();
});