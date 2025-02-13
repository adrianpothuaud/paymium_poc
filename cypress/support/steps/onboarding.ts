import {Given, Then, When} from "@badeball/cypress-cucumber-preprocessor";

import {StepDefCountry} from "../types";
import {mapCountryToLanguage, mapCountryToLanguages} from "../utils";

Given(/^(.*) is on (france|england) onboarding page$/, function (firstName, country: StepDefCountry) {
    Cypress.on('uncaught:exception', (err) => {
        // returning false here prevents Cypress from
        // failing the test when javascript errors are detected from the application
        console.log('Cypress detected uncaught exception: ', err);
        return false;
    });

    cy.visit('https://account.paymium.com/sign-up', {
        onBeforeLoad(win) {
            Object.defineProperty(win.navigator, 'language', { value: mapCountryToLanguage(country) });
            Object.defineProperty(win.navigator, 'languages', { value: mapCountryToLanguages(country) });
            Object.defineProperty(win.navigator, 'accept_languages', { value: mapCountryToLanguages(country) });
        },
        headers: {
            'Accept-Language': mapCountryToLanguages(country)[0],
        },
    });
});

When(/^(.*) starts the b2c onboarding$/, function () {
    cy.getIsFr((isFr) => {
        cy.get("div[role=radiogroup]").contains(isFr ? "Particulier" : "na").click()
        cy.get('[data-testid="buttonNext"]').click()
    });
});

Then(/^(.*) starts the onboarding$/, function () {
    cy.origin("account.paymium.com", () => {
        cy.getIsFr((isFr) => {
            cy.url().should("contain", "/sign-up")
            cy.get("h1").should("have.text", isFr ? "" : "")
        })
    })
});