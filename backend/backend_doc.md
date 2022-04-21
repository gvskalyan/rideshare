# Backend API Doumentation

## Developers:     
1) Kalyan GVS
2) Dheeraj Mamillapalli

## API's Developed:

- [signup](#1-signup)
- [login](#2-login)
- [logout](#3-logout)
- [user](#4-user)
- [deleteUser](#5-deleteUser)
- [postaRide](#6-postaRide)
- [searchaRide](#7-searchaRide)
- [bookRide](#8-bookRide)
- [history](#9-history)



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


### 5) deleteUser

#### Description:

- Method: DELETE
- This API is used to delete all the data of the existing user from the database records.
- This action is performed using JSONWebToken

#### Sample Request and Response:
![deleteUser](https://user-images.githubusercontent.com/97773629/164390439-7c750c04-11a7-4832-a770-ae6f837e1328.PNG)



### 6) postaRide
#### Description:

-  Method: POST
-  This API is used to “post a ride” details by the users.
-  Users must be logged in to use this PostARide functionality

#### Acceptance Criteria:

-  For Posting a ride the following fields must be provided by the user: <em>name, startLocation, fromCity, toCity, destLocation, priceperSeat, duration, seatsAvailable, addlNotes, phoneNumber, startTime, endTime</em>
- Once all the required inputs are properly given by the user, the API gives a confirmation message: <em>“Ride has been Successfully Posted.”</em>

#### Sample Request and Response:
![postaRide](https://user-images.githubusercontent.com/97773629/164401412-0cea772b-914f-4f9f-831a-c8f4772c7558.PNG)


### 7) searchaRide
#### Description:

- Method: POST
- Using this API, users can get the available rides.
- To search for available rides fromCity , toCity and startDate, time must be provided.


#### Acceptance Criteria:

- The API should throw an error message whenever any of the above mentioned required
parameters aren’t specified.
- Whenever a request is sent the API should send a response with the list of available rides in the specified routes with details : name, startLocation, fromCity, toCity, destLocation, priceperSeat, duration, seatsAvailable, addlNotes, phoneNumber, rideID, startTime.


#### Sample Request and Response:

![searchaRide1](https://user-images.githubusercontent.com/97773629/164404959-a3274642-ac1b-42b9-8b00-65ce43a9ad02.PNG)

![searchaRide2](https://user-images.githubusercontent.com/97773629/164404916-d15335fd-558b-4fc2-bed3-389ed39df912.PNG)

![searchaRide3](https://user-images.githubusercontent.com/97773629/164404863-bbb14384-72dd-43d7-9f6d-4b71a7817499.PNG)

![searchaRide4](https://user-images.githubusercontent.com/97773629/164404801-a5f5903d-d1ad-4063-87be-fbc115dbd695.PNG)


### 7) bookaRide
#### Description:

- Method: POST
- Using this API, users can book a ride from the list of available rides.
- Users can get the list of available rides between specified cities from searchaRide API response


#### Acceptance Criteria:

- Once the Ride is sucessfully booked by the user a success message is diplayed:<em>"Ride has been successfully booked"</em> .
- only a valid RideID is given as the request to the API.


#### Sample Request and Response:
![bookride](https://user-images.githubusercontent.com/97773629/164409590-995be31e-064e-4e3f-bfb5-f1d50e1590aa.PNG)






### 7) history
#### Description:

- Method: POST
- Using this API, users can retrive their past and future rides history.

#### Acceptance Criteria:

- Once the user is loggedin an active JSON token is generated. 
- This API fetches the userId from the active JSONToken and fetches the booking history from the database that are available on that userId.
- If no bookings are found it shows a message:<em>"No rides found"</em>

#### Sample Request and Response:
![ridehistory](https://user-images.githubusercontent.com/97773629/164411074-720acf3f-6b62-4549-b7e6-e47e77be0872.PNG)



