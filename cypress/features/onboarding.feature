@onboarding
Feature: Onboarding new users

  ##############################
  # Misc
  ##############################
  @skip
  Scenario Outline: Onboarding experience is available through the landing page in <country> on <screenType> screen
    Given <firstName> is on a <screenType> screen
    Given <firstName> is on <country> landing page
    When <firstName> clicks on Subscribe
    Then <firstName> starts the onboarding
    # ici le test ne marche pas à cause du changement de domaine
    # ref: https://docs.cypress.io/app/guides/cross-origin-testing#Limitations

    Examples:
      | firstName | country | screenType |
      | Adrian    | france  | macbook-16 |
      | John      | england | iphone-x   |

  ##############################
  # B2C User
  ##############################
  Scenario: Toutes les erreurs de formulaire email
    Given Adrian is on france onboarding page
    When Adrian starts the b2c onboarding
    And Adrian sends an invalid email
    Then The onboarding is currently blocked
    And Adrian sends a valid new email
    Then The onboarding is unlocked

  Scenario: Cas non passant - Adresse email enregistrée
    Given Adrian is on france onboarding page
    When Adrian starts the b2c onboarding
    # Cette step pourra être définie en fonction des données / du process d'authentification et d'inscription utilisateur
    And Adrian gives an already registered email address
    # expected: ??? est-ce qu'on reject à cette étape ou à une prochaine ? (à voir avec le produit)
    # peut-être qu'on veut faire de l'obfuscation d'erreur pour éviter les attaques

  ##############################
  # B2B User
  ##############################