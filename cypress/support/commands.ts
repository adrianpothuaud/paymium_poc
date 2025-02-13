import '@testing-library/cypress/add-commands'

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add('getIsFr', (callback: (isFr: boolean) => void) => {
    cy.window().then((window) => {
        // @ts-ignore
        const isFr = window.navigator.language === 'fr' || window.navigator.languages.includes('fr') || (window.navigator.accept_languages!.includes('fr'));
        callback(isFr);
    });
})

Cypress.Commands.add('getIsMobile', (callback: (isMobile: boolean) => void) => {
    cy.window().then((window) => {
        const isMobile = window.innerWidth <= 768
        callback(isMobile);
    });
})

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })