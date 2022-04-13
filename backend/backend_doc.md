# Backend API Doumentation

## Developers:     
1) Kalyan GVS
2) Dheeraj Mamillapalli

## API's Developed:

- [signup](#1-signup)
- [login](#2-login)
- [logout]
- [user]
- [delete]
- [postaRide]
- [searchRides]
- [bookaRide]
- [rideHistory]



### 1) signup

#### Description:

- Method: POST
- This API allows the new users to register on the application.
- Once the user is registered, they can login into the web application whenever, using their email address
and password as login credentials.

#### Acceptance Criteria:

- For registering, the following fields are required to be entered by the user: <em>Name, Email,
Password, Gender, City, DateofBirth, PhoneNumber. </em>
 - If any/all of these fields weren’t entered, the API throws an error message.
 - Once all the inputs are properly entered by the user, all these details are updated to the users table
in the database.
 -  If an user tries registering again using the same email, the API throws an error message: <em>“User already registered”</em>

#### Sample Request and Response:

- 



### 2) login

#### Description:

- Method: POST
- This API allows the already existing users to login to the application.
- Valid credentials must be provided for a successful login.
- Logging in is mandatory for any user to use the functionalities of application like <em>postaride</em> and <em>searchaRide</em>.

#### Acceptance Criteria:

- During signup user provides the details including email ID and the password.
- To login user needs to provide correct login credentials ie emailID and password.
- This API validates the credentails entered by the user and redirects to the Homepage if they are correct. Else throws an error message : <em>"Incorrect Login Credentials"</em>

#### Sample Request and Response:

 - 

### 3) logout


