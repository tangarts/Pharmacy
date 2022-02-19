Feature: Medication Inventory
    As a Pharmacist
    I want to add medication to the inventory
    so that we maintain stock levels for our medications in our formulary
    and we can understand when we need to order more medication from our supplier

    # Assumptions
    Scenario: Only medication in the formulary can be added to stock
        Given the medication "Tramadol" is not present in the formulary
        When I try to add "Tramadol" to the stock
        Then I should get an error

    # Acceptance Criteria
    Scenario: Ability to add packs for medications already in the formulary list
        Given the medication "Tramadol" is present in the formulary
        And the stock is empty
        When I try to add "Tramadol" to the stock
        Then the stock should not be empty
        And the stock should contain "Tramadol"

    Scenario: Ability to list the medication in stock and the quantities
        Given the medication "Medication A" is present in the formulary
        And the medication "Medication B"  is present in the formulary
        And the stock is empty
        And I try to add the list of medications to the stock:
            | Name         | Strength | Pack Size | Total Packs |
            | Medication A | 1mg      | 5         | 10          |
            | Medication B | 5mg      | 10        | 2           |
        When I list the medication in stock
        Then "Medication A" should be in the stock
        And "Medication B" should be in the stock
