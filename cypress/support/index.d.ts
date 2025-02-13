declare namespace Cypress {
    interface Chainable<Subject = any> {
        getIsFr(callback: (isFr: boolean) => void): void
        getIsMobile(callback: (isMobile: boolean) => void): void
    }
}