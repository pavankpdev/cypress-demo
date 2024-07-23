describe('Leave Page', () => {
    beforeEach(() => {
        cy.visit('/auth/login')
        cy.get('input[name="username"]').type("Admin")
        cy.get('input[name="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
    })
    it('should be able to apply leave', () => {
        cy.get('ul.oxd-main-menu > li')
            .eq(2)
            .find('a.oxd-main-menu-item')
            .click();

        cy.get('nav[role="navigation"]')
            .find('ul li a.oxd-topbar-body-nav-tab-item')
            .eq(0)
            .click()

        cy.location("pathname").should('include', "applyLeave")

        cy.get('div.oxd-select-text').click({ force: true })
        cy.contains('CAN - FMLA').click({ force: true });

        cy.get('input[placeholder="yyyy-dd-mm"]').first().click();
        cy.get('.oxd-calendar-date').contains('15').click();

        cy.get('input[placeholder="yyyy-dd-mm"]').last().click();
        cy.get('.oxd-calendar-date').contains('20').click();

        cy.get('button[type="submit"]').click()
    })


})