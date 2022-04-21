
# Sprint 4

## Application Description


## Deployment Link


## Work Done / Deliverables

- Implement Booking History (Feature)
- CI/CD pipeline that evaluates the code integrity and provides platform for timed deployment.
- Fixed bugs that occur when the user is not logged in (earlier the backend thread crashes due to this)
- Use Heroku to deploy Backend and write [Custom buildpack script for go-lang](https://github.com/gvskalyan/heroku-buildpack-go) . (Since the repo is a multi app with separate backend and frontend scripts, in order for the project root to stay devoid of multiple deployment related files and hacks, opted to have own buildpack for Heroku)
- Make the return response in backend API more informative.
- Follow industry principles in designing and using more UI components.
- Integration testing for backend code.
- Cypress tests for frontend code.
- Modify backend code so that it is compatible with frontend request and response values.

## Demo Video


## Frontend

- The login and signup for the webpages has been customized to align with the template of the rest of the application
- The Profile page has been updated to show the details of the user logged in.
- The Profile page has also been updated to show the Ride History of the user.
- The Logout option previously located in the profile page has been moved to the navigation bar for more convenience.
- The Find a Ride page has been updated to make the available rides much more easier to read/understand.
- Book a ride functionality has been integrated and is made available to the user.

### Steps to run Frontend : 
- After cloning the repository, run "cd frontend"
- run "npm start"

### Screenshots for frontend 
1. Login page <img width="1728" alt="Screen Shot 2022-04-20 at 9 53 18 PM" src="https://user-images.githubusercontent.com/64024449/164356900-d93205ab-6654-4308-8fa8-d4c842d9f202.png">

2. Signup page <img width="1728" alt="Screen Shot 2022-04-20 at 10 08 56 PM" src="https://user-images.githubusercontent.com/64024449/164357538-546b2bc7-ea54-4c68-85d4-c05f64231577.png">

3. Welcome page ("User Tester" is the name of the user) <img width="1728" alt="Screen Shot 2022-04-20 at 9 54 02 PM" src="https://user-images.githubusercontent.com/64024449/164356883-3857bf7c-7c1e-42b5-989b-c46d9b7e0169.png">

4. Find a Ride page <img width="1728" alt="Screen Shot 2022-04-20 at 9 54 35 PM" src="https://user-images.githubusercontent.com/64024449/164356536-44660c5d-47fd-4633-be73-41e9ff8cfb67.png">

5. Rides retrieved from the database <img width="1728" alt="Screen Shot 2022-04-20 at 9 55 36 PM" src="https://user-images.githubusercontent.com/64024449/164356703-af5249e0-a244-429c-b1c4-b9abd7c6fbb6.png">

5. Post a Ride page <img width="1728" alt="Screen Shot 2022-04-20 at 9 55 09 PM" src="https://user-images.githubusercontent.com/64024449/164356522-85ed9b21-3337-4cc1-b168-db3c12ba505e.png">

7. Profile page <img width="1728" alt="Screen Shot 2022-04-20 at 9 55 47 PM" src="https://user-images.githubusercontent.com/64024449/164356239-da0ea5d2-8bf0-4d91-925d-dbafeca70c71.png">


8. Cypress Test result


### Cypress Test Video


### To run react

```bash
cd frontend
npm start
```

## Backend

### To start backend server

```bash
gin -i  --appPort 8081 --port 8080
```
### API Documentation link

Backend API documentation is available in the [link](backend/backend_doc.md)

### Deployed Link

Backend is deployed using Heroku and can be accesed using https://rideshare-se.herokuapp.com/

## To Do/ Roadmap


