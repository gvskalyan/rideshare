# Backend API Doumentation

## Developers:     
1) Kalyan GVS
2) Dheeraj Mamillapalli

## API's Developed:

- [signup](#1-signup)
- [login](#2-login)
- [logout](#3-logout)
- [user](#4-user)
- [delete](#5-delete)
- [postaRide](#6-postaride)
- [searchRides](#)
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


### 4) user

#### Description:

- Method: GET
- Once the user is logged in successfully an active JSONWebToken is generated. This API retrieves the user details such as Name, Email, Password(encrypted format), Gender, City, DateofBirth, PhoneNumber using the web token.

#### Sample Request and Response:

- 

### 5) delete

#### Description:

- Method: DELETE
- This API is used to delete all the data of the existing user from the database records.
- This action is performed using JSONWebToken

#### Sample Request and Response:

- 

### 6) postaRide
#### Description:

-  Method: POST
-  This API is used to “post a ride” details by the users.
-  Users must be logged in to use this PostARide functionality

#### Acceptance Criteria:

-  For Posting a ride the following fields must be provided by the user: <em>name, startLocation, fromCity, toCity, destLocation, priceperSeat, duration, seatsAvailable, petsAllowed, carModel, carType, addlNotes, phoneNumber.</em>
- Once all the inputs are properly entered by the user, the API throws a confirmation message: <em>“Ride has been Successfully Posted.”</em>

#### Sample Request and Response:

- 



