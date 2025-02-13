import {Given, When} from "@badeball/cypress-cucumber-preprocessor";

import {StepDefCountry} from "../types";
import {mapCountryToLanguage, mapCountryToLanguages} from "../utils";

function openBurgerMenu() {
    cy.get("div[aria-label=menu]").click()
}

Given(/^(.*) is on (france|england) landing page$/, function (firstName, country: StepDefCountry) {
    Cypress.on('uncaught:exception', (err) => {
        // returning false here prevents Cypress from
        // failing the test when javascript errors are detected from the application
        console.log('Cypress detected uncaught exception: ', err);
        return false;
    });

    cy.visit('https://www.paymium.com/', {
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

When(/^(.*) clicks on Subscribe$/, function (firstName) {
    cy.getIsMobile((isMobile) => {
        if (isMobile) openBurgerMenu()
        cy.get(".navbar").find("a.btn-signup").click()
    })
});