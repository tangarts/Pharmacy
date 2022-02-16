Feature: Medication Inventory
    As a Pharmacist
    I want to add medication to the inventory
    so that we maintain stock levels for our medications in our formulary
    and we can understand when we need to order more medication from our supplier

    # Assumptions

    Scenario: Only medication in the formulary can be added to stock
        Given I add ...
        When I try to add ... to the stock
        Then I get ...

    Scenario: All medications are tablets and stocked in packs of the same strength
        Given I have a pack of medication
        Then the medication are tablets
        And the medication in packs have the same strength

    # Only those packs provided in the sample data list should be used. Sample data for packs can be found in section 5.0
    # Acceptance Criteria

    Scenario: Ability to add packs for medications already in the formulary list

    Scenario: Ability to list the medication in stock and the quantities



# Scenario
# The new Truepill pharmacy is now ready to take stock of the items in the formulary. The medications are
# delivered on separate days and the stock is tracked as it arrives and put into storage. Your application
# should run the following steps
# 1. Add 100 packs of 50x500mg Paracetamol
# 2. Add 100 packs of 50x500mg Ibuprofen
# 3. Add 20 packs of 20x250mg Amoxicillin
# 4. Add 5 packs of 100x50mg Tramadol
# 5. Add 20 packs of 10x30mg Codeine
# 6. Add 10 packs of 10x10mg Simvastatin
# 7. Add 5 packs of 50x3mg Warfarin
# 8. List the name, strength, pack size and the total number of packs for all the medication in stock.
# Example output in Figure 1 below.

# Examples:
# | Name | Strength | Pack | Size | Total | Packs |
# | Medication | A | 1mg | 5 |10 |
# | Medication | B | 5mg | 10 | 2 |