describe('Auth Page', () => {

  beforeEach(() => {
    cy.visit('/auth/login')
  })

  it('should display the login form elements', () => {
    cy.get('input[name="username"]').should("be.visible")
    cy.get('input[name="password"]').should("be.visible")
    cy.get('button[type="submit"]').should("be.visible")
  })

  it('should navigate to the dashboard after login', () => {
    cy.get('input[name="username"]').type("Admin")
    cy.get('input[name="password"]').type("admin123")
    cy.get('button[type="submit"]').click()
    cy.wait(2000)
    cy.location("pathname").should("include", "/dashboard/index")
  })

  it('should display an error message when submitting invalid credentials', () => {
    cy.get('input[name="username"]').type("InvalidUsername")
    cy.get('input[name="password"]').type("admin123")
    cy.get('button[type="submit"]').click()
    cy.get('p').should('contain', 'Invalid credentials')
  })
})