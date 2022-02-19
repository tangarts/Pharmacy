Feature: Medication available in the pharmacy
    As a Pharmacist
    I want to maintain a list of medications we have in our formulary
    So that we know the medications we can dispense to our patients

    # Assumptions
    # 1. The name of a medication acts as its unique identifier

    Scenario: Ability to add the name of a medication to the formulary
        Given the formulary is empty
        When I try to add medication with the name of "Amoxicillin" to the formulary
        Then the inventory should not be empty
        And medication with the name of "Amoxicillin" should be in the formulary

    Scenario: Medication cannot be added to the formulary more than once
        Given "Amoxicillin" is present in the formulary
        When I try to add medication with the name of "Amoxicillin" to the formulary
        Then the formulary should contain one instance of "Amoxicillin"

    Scenario: Ability to return a list of medication names in the formulary
        Given I have a list of medications to add to the formulary:
            | Name        |
            | Codeine     |
            | Diclofenac  |
            | Ibuprofen   |
            | Paracetamol |
            | Simvastatin |
            | Tramadol    |
            | Warfarin    |
        When I ask for the list of medication names in the formulary
        Then I should get back the list of medication names:
            | Name        |
            | Codeine     |
            | Diclofenac  |
            | Ibuprofen   |
            | Paracetamol |
            | Simvastatin |
            | Tramadol    |
            | Warfarin    |
