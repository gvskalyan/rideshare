
  describe('LoginToSignUp', () => {
    it('Login/Logout', () => {
      //Don't have an acccount
      cy.visit('http://localhost:3000/login')    
      cy.contains('Don\'t have an account? Sign Up').click()
      cy.url().should('include', '/signup')
    })




    it('SignUp', () => {    
      cy.visit('http://localhost:3000/signup')
      //SignUp
      cy.get('input[name=firstName]')
        .type('testfirstname', {force: true})
        .should('have.value', 'testfirstname')
      cy.get('input[name=lastName]')
        .type('testlastname', {force: true})
        .should('have.value', 'testlastname')
      cy.get('[type="radio"]').check('Female')
      cy.get('input[name=city]')
        .type('Gainesville')
        .should('have.value', 'Gainesville')
      cy.get('input[name=email]')
        .type('test@gmail.com')
        .should('have.value', 'test@gmail.com')
      cy.get('input[name=phone]')
        .type('111111111111')
        .should('have.value', '111111111111')
      cy.get('input[name=password]')
        .type('password')
        .should('have.value', 'password')
      cy.get('input[name=reEnterPassword]')
        .type('password')
        .should('have.value', 'password')
      cy.contains('Sign Up').click()
      cy.on('window:alert', (text) => {
        expect(text).to.contains('User Registered Successfully')
      })
      cy.url().should('include', '/login')
    })



    it('Login', () => {
      cy.visit('http://localhost:3000/login')
      cy.get('input[name=email]')
        .type('{selectall}{backspace}test@gmail.com')
      cy.get('input[name=password]')
        .type('{selectall}{backspace}password')
      cy.contains('Sign In').click()
      cy.on('window:alert', (text) => {
        expect(text).to.contains('Login Success');
      });
      cy.url().should('include', '/About')
    })

    it('NavBar', () => {
      cy.visit('http://localhost:3000/login')
      cy.get('input[name=email]')
        .type('{selectall}{backspace}test@gmail.com')
      cy.get('input[name=password]')
        .type('{selectall}{backspace}password')
      cy.contains('Sign In').click()
      
      cy.contains('Home').click()
      cy.url().should('include', '/UserWelcome')

      cy.contains('Find a Ride').click()
      cy.url().should('include', '/Find')

      cy.contains('Post a Ride').click()
      cy.url().should('include', '/Post')

      cy.contains('Profile').click()
      cy.url().should('include', '/Profile')
    })


    it('FindaRide', () => {
      cy.visit('http://localhost:3000/login')
      cy.get('input[name=email]')
        .type('{selectall}{backspace}test@gmail.com')
      cy.get('input[name=password]')
        .type('{selectall}{backspace}password')
      cy.contains('Sign In').click()
      cy.contains('Find a Ride').click()
      cy.get('select[name="from"]').select('Gainesville').should('have.value', 'Gainesville')
      cy.get('select[name="to"]').select('Gainesville').should('have.value', 'Gainesville')
    })


    it('PostingaRide', () => {
      cy.visit('http://localhost:3000/login')
      cy.get('input[name=email]')
        .type('{selectall}{backspace}test@gmail.com')
      cy.get('input[name=password]')
        .type('{selectall}{backspace}password')
      cy.contains('Sign In').click()
      cy.contains('Post a Ride').click()
      cy.get('name').select('Gainesville').should('have.value', 'Gainesville')
      cy.get('from').select('Gainesville').should('have.value', 'Gainesville')
      cy.get('to').select('Gainesville').should('have.value', 'Gainesville')
      cy.get('Destination Location:').type('Home').should('have.value', 'Home')
      cy.get('Price of a seat::').type('11').should('have.value', '11')
      cy.get('Duration:').type('11').should('have.value', '11')
      cy.get('Capacity:').type('2').should('have.value', '2')
      cy.get('Pets Allowed?:').select('yes').should('have.value', 'yes')
      cy.get('Car Model:').select('Porche').should('have.value', 'Porche')
      cy.get('Car Type:').select('tractor').should('have.value', 'tractor')
      cy.get('Additional Notes').select('speed all the way please').should('have.value', 'speed all the way please')
      cy.get('Phone Number:').select('911').should('have.value', '911')
    })
})