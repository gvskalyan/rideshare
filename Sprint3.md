# Sprint 3 Outline and Documentation

[Demo Link](https://drive.google.com/file/d/1Hu11sRQE4jfyNQIaQYKHiTj67Ag_t78F/view?usp=sharing)

[Sprint 3 Task Board](https://github.com/gvskalyan/rideshare/projects/3)

## Frontend
- Made functionalities available to users only upon login.
- Added a user specific welcome page.
- User provided data to post the rides has been successfully sent to the database.
- Made navigation through pages simple.
- Implemented a logout functionality.


### Steps to run Frontend : 
- After cloning the repository, "run cd frontend"
- run "npm start"


### Screenshots for frontend 
1. Login page 
<img width="1728" alt="Screen Shot 2022-04-01 at 8 51 40 PM" src="https://user-images.githubusercontent.com/64024449/161357643-919b319d-5405-46e1-9b8e-4a7082cbebc4.png">
2. Signup page
<img width="1728" alt="Screen Shot 2022-04-01 at 8 52 05 PM" src="https://user-images.githubusercontent.com/64024449/161357670-5a817b9d-c15f-4422-a605-78ea00b2678e.png">
3. Welcome page ("User Tester" is the name of the user)
<img width="1728" alt="Screen Shot 2022-04-01 at 8 52 24 PM" src="https://user-images.githubusercontent.com/64024449/161357684-d326192c-e68d-43f8-ba81-5fdb4e056d43.png">
4. Find a Ride page
<img width="1728" alt="Screen Shot 2022-04-01 at 8 52 42 PM" src="https://user-images.githubusercontent.com/64024449/161357693-f202815c-585e-44c9-8246-b3422fe20b48.png">
5. Post a Ride page
<img width="1728" alt="Screen Shot 2022-04-01 at 8 52 57 PM" src="https://user-images.githubusercontent.com/64024449/161357707-cf410b1d-31d5-49d9-8902-e69be0d34d89.png">
7. Profile page
<img width="1728" alt="Screen Shot 2022-04-01 at 8 53 14 PM" src="https://user-images.githubusercontent.com/64024449/161357722-457e75c4-7926-430e-a83e-d5f84b18ff2a.png">
8. Test result
<img width="1728" alt="Screen Shot 2022-04-01 at 8 53 14 PM" src="https://user-images.githubusercontent.com/34689959/161361025-3027a77d-a448-45eb-b0ff-dadf9fc2f8c6.png">


## Backend

### Work Done

- Implement Booking ride functionality
- Implement Booking ride confirmation to mail 
- Write unit tests to the above features and add
- Plan ride details response and db details
- Optimize the existing backend code

### Explanation

- We introduced one of the important features, the book ride feature. With this an authorized user can book a ride from a list of all available rides.
- BookaRide API enables the user to book a ride, given that ride is available. The user is displayed a Booking ID and confirmation message on a successful booking.
- To implement this functionality we had added a Status field in the RideDetails table. This “Status“ value will be ‘0’ by default. If the user books the particular ride using “bookaRide” api this Status value will be changed to 1 indicating the ride is booked. Thereby this particular ride is not visible to the user to book. To enable this a few changes had been made in the searchRides api such that rideDetails with “Status” value ”1” are not sent in the API response.
- We had also introduced the rideHistory API which returns a list of all the past and future rides booked by that particular user.
- We made changes to the previously deployed unittest to validate the newly created methods.

### Initializing steps

- Install the dependencies using `go install`
- Create a table named `postride` in postgres.
- Check the .env file present in backend for specific user setting.
### Command to start backend server

- cd backend
- ```gin -i  --appPort 8081 --port 8080```

### bookaRide API 

<strong> Target URL </strong> - localhost:8081/bookaRide
<strong> Request method  </strong> - POST

#### Request
```
{
"RideID": "213", "UsereMail":"rideshare-test@gmail.com", "Phone":"8125262243"
}
```

#### Response
```
{
    "BookingID": 171,
    "CreatedAt": "2022-04-01T18:12:52.136105-04:00", "UpdatedAt": "2022-04-01T18:12:52.136105-04:00", "DeletedAt": null,
    "RideId":213,
    “userMail”: “rideshare-test@gmail.com”, “Phone”: “8125262243”
    "fromCity": "Gainesville",
    "toCity": "Tampa",
    "priceperseat": 0,   
    "ToStartTime": "2022-02-01T03:10:50-05:00" 
}
```

### To Do - Roadmap

- Create User profile (Feature)
- Make the return response in backend API more informative.
- Follow industry principles in designing and using more UI components.
- Add accessiblity features to UI
- Extensive integration testing to find bugs and fix them.
- CI/CD pipeline
- Deployment scripts and setup
