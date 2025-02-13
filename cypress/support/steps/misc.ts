import {Given} from "@badeball/cypress-cucumber-preprocessor";

Given(/^(.*) is on a (.*) screen$/, function (firstName, screenType: Cypress.ViewportPreset) {
    cy.viewport(screenType)
});