Hi Paymium Team!

> I am really happy to have a chance to show you my skills as an experienced Lead QA & Automation Engineer.
Let me introduce this project.

The idea is to showcase very quickly how to set up multiple automated tests in order to enhance software testing and quality and help providing fast feedback to developers and avoiding regressions.
I have preferred to not go to deep in each part of this project in favor of showcasing that we can automate multiple type of tests.
Please be kind! I am looking forward to discuss it with you.

# Web Testing

## The tools

- Cypress: because I know you are already using it, and it's a very good choice for web testing

## Some Utilities

- Cypress Testing Library: best practices for selecting elements using accessibility driven attributes
- Cypress Cucumber Preprocessor: Implement BDD and Gherkin within Cypress project

## Test cases

I chose to write Onboarding test cases in Gherkin to showcase how BDD could work with Cypress for web testing (I discussed BDD during my interview with Dominique).
I also chose to implement multi-locale and responsive tests due to the european context of Paymium.
First, I tried the onboarding myself manually; and I tried to find as many test cases as possible to ensure its stability and core features.
I was blocked in manual testing due to expired ID card and blocked in automation due to email and sms verification steps that are not a problem when we know the technical implementation details, but with my current understanding and context I am not able to automate it so I created tests and functions skeletons to be filled later.

To generate the test cases I have used Scribehow allowing me to generate a step-by-step guide with screenshots on the user onboarding flow

Ideally we will use a test management system to document the test case.

Also, we would be able to create more test cases with error and edge cases onc e the nominal flow is completed.

Example:
- email already registered
- phone number already registered
- ...

Edge case examples:
- Interrupt the onboarding at any step, then resume from dashboard

Technical solutions for test automation:
- ex: use mail spy service like mailtrap.io to track email in test environment
- ex: use sms service with an api able to be fetched to get OTP from a test account
- ex: access database to query for user OTP during onboarding process to bypass real phone device in automation testing
- ex: mock/stub id verification service to be able to test and simulate nominal and edge cases

## Setup

```bash
git clone xxxxxxxxxxxxxxxxxxxxxxxxxxxx
npm install
```

## Run

```bash
# to run cypress tests locally with UI and debug capability
npm run cypress:open
# to run cypress tests on the terminal
npm run cypress:run
```

# API Testing

## The tools

- Postman
- newman
- axios and Node.js for synchronizing collections and environments using the file system

## Test cases

Very few tests the idea is just to show you a solution for api testing automation using Postman, Javascript and newman.
Later it could be integrated into a CI/CD pipeline.

- Register captcha error cases
- +idea: test rate limit
- Get User profile nominal case
  - I have not enough time to investigate auhtorization so the test will fail but again the idea is just to show you how it's possible to do it

## Setup

```bash
git clone xxxxxxxxxxxxxxxxxxxxxxxxxxxx
npm install
echo "POSTMAN_ONBOARDING_COLLECTION_ID=xxxxxxxxxx\nPOSTMAN_USER_ACCOUNT_COLLECTION_ID=xxxxxxxx\nPOSTMAN_ENVIRONMENT_ID=xxxxxxxx\nPOSTMAN_PERSONAL_API_TOKEN=xxxxxxxxxxx" > .env
npm run postman:synchronize
```

## Run

```bash
npm run postman:run
```

# Load testing

## The tools

- K6

## Some Utilities
## Test cases

Just sample tests as Proof Of Concept

## Setup

```bash
git clone xxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

- +[k6 - getting started](https://grafana.com/docs/k6/latest/examples/get-started-with-k6/)

## Run

```bash
npm run k6:run
```

-----

Happy testing!!!