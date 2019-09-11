
describe('Auth page', function() {
  it('should have a sign up with GitHub link', function() {
    cy.visit('/');
    cy.get("a").should("contain", "Sign up with")
  });

  it('should redirect to github login page', function () {
    cy.get("a").should("contain", "Sign up with").click();
    cy.url().should('contain', 'https://github.com/login');
  });
});
