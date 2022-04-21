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
- [searchRides](#7-searchrides)
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
Password, DOB, Gender, PhoneNumber, City. </em>
 - If any/all of these fields weren’t entered, the API throws an error message.
 - Once all the inputs are properly entered by the user, all these details are updated to the users table in the database and API gives a message:<em>"Hi username your rideshare account has been successfully created"</em>
 -  If an user tries registering again using the same email, the API throws an error message: <em>"Error creating your account. There exists some account associated with your email. Please try with different email.”</em>

#### Sample Request and Response:

- signup success
![signup_success](https://user-images.githubusercontent.com/97773629/164362041-4dfd321d-3056-4049-b895-9e70262596cf.PNG)
- signup failure
![signup_failure](https://user-images.githubusercontent.com/97773629/164362080-3fc14093-c673-4c20-b8d5-575d27eec938.PNG)



### 2) login

#### Description:

- Method: POST
- This API allows the already existing users to login to the application.
- Valid credentials must be provided for a successful login.
- Logging in is mandatory for any user to use the functionalities of application like <em>postaride</em> and <em>searchaRide</em>.

#### Acceptance Criteria:

- During signup user provides the details including email ID and the password.
- To login user needs to provide correct login credentials ie emailID and password.
- This API validates the credentails entered by the user and redirects to the Homepage if they are correct. Else throws an error message : <em>"Invalid login credentials. Please try again"</em>

#### Sample Request and Response:

- login success
![login_success](https://user-images.githubusercontent.com/97773629/164362582-2261059e-9739-4faf-ba5c-0cb6ab78fdc8.PNG)
- login failure
![login_failure](https://user-images.githubusercontent.com/97773629/164362599-f27b75c3-304c-41f6-8c8a-4402d9062008.PNG)



### 3) logout

#### Description:

- Method: POST
- When the user login is successful an active JSONWebToken is generated. Using this JSONWebToken this API ends the user session thus logging out of application 
#### Sample Request and Response:
![logout](https://user-images.githubusercontent.com/97773629/164363347-a20e4f7f-632f-4d37-baf2-dc5af748e095.PNG)


### 4) user

#### Description:

- Method: GET
- Once the user is logged in successfully an active JSONWebToken is generated. This API retrieves the user details such as Name, Email, Password(encrypted format), Gender, City, DateofBirth, PhoneNumber using the web token.

#### Sample Request and Response:
 ![userdetails](https://user-images.githubusercontent.com/97773629/164363812-9d061c1b-9231-465b-ac19-d34368bf502c.PNG)


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

### 7) searchRides
#### Description:

- Method: POST
- Using this API, users can get the available rides.
- To search for available rides fromCity , toCity and startDate, time must be provided.


#### Acceptance Criteria:

- The API should throw an error message whenever any of the above mentioned required
parameters aren’t specified.
- Whenever a request is sent the API should send a response with the list of available rides in the specified routes with details : name, startLocation, fromCity, toCity, destLocation, priceperSeat, duration, seatsAvailable, petsAllowed, carModel, carType, addlNotes, phoneNumber.


#### Sample Request and Response:

- 

