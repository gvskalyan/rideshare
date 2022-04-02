# Sprint 3 Outline and Documentation

[Demo Link]()

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
- Optimize the backend code
- 

### Initializing steps

- Create a table named `postride` in postgres.
- Check the .env file present in backend for specific user setting.
### Steps to Run

- cd backend
- ```gin -i  --appPort 8081 --port 8080```



### To Do

- Create User profile (Feature)
- Make the return response in backend API more informative.
- Follow industry principles in designing and using more UI components.
- Add accessiblity features to UI
- Extensive integration testing to find bugs and fix them.
- CI/CD pipeline
- Deployment scripts and setup
