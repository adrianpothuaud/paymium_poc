import {StepDefCountry} from "./types";

export function mapCountryToLanguage(country: StepDefCountry): string {
    switch (country) {
        case 'france':
            return 'fr-FR';
        case 'england':
            return 'en-GB';
    }
}

export function mapCountryToLanguages(country: StepDefCountry): string[] {
    switch (country) {
        case 'france':
            return ['fr', 'fr-FR'];
        case 'england':
            return ['en', 'en-GB'];
    }
}