describe('Visit rideshare', () => {
    it('Visit rideshare', () => {
      cy.visit('http://10.16.173.12:3000')
    })
  })
  

  
  describe('Login/Logout', () => {
    it('Login/Logout', () => {
      //login
      cy.visit('10.16.173.12:3000')
      cy.get('input[name=email]')
        .type('{selectall}{backspace}test@gmail.com')
      cy.get('input[name=password]')
        .type('{selectall}{backspace}password')
  
      cy.contains('Sign in').click()
      cy.on('window:alert', (text) => {
        expect(text).to.contains('Login Success');
      });
      cy.url().should('include', '/')
    })
  })

  describe('SignUp', () => {

    it('SignUp', () => {    
      cy.visit('http://10.16.173.12:3000')
  
      //SignUp
      cy.contains('Sign Up').click()
      cy.url().should('include', '/signup')
      cy.get('input[name=firstName]')
        .type('testfirstname')
      cy.get('input[name=lastName]')
        .type('testlastname')
      cy.get('input[name=city]')
        .type('Gainesville')
      cy.get('input[name=email]')
        .type('test@gmail.com')
      cy.get('input[name=phone]')
        .type('111111111111')
      cy.get('input[name=password]')
        .type('password')
      cy.get('input[name=reEnterPassword]')
        .type('password')
      cy.contains('Sign Up').click()
      cy.url().should('include', '/')
    })
  })