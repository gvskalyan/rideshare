
# Sprint 4

## Application Description

- Mission statement:
Due to today's raised gas price and increasing environmental concerns, ridesharing has become the prefered transportation method for many. 
Our application aimed to solve a problem: How to efficiently find ride share traveling between major cities. 
We aimed to provide a clean, efficient frontend UI coupled with a lightweight responsive backend database to provide fast and concise experience for carpool search.
<br/>

- Technology:
We use the powerful combination of React/JS and Go programing language to construct the frontend and backend respectively for our project. 
We also use online development framework MUI for some of our applications. Our database was made using PostgreSQL. 
<br/>

- Features:
To achieve our mission of providing smooth, efficient rideshare finding experience, we constructed a lightweight, efficient yet powerful UI. 
The user is first directed to register an account with critical information such as name, DOB, email address, phone number, and password. 
All users of the application must go through the same registration and login process. 
After logging into the account, the user can choose to either search a ride or post a ride. 
A backend search engine will match the need of the rider to all the ride providers.
<br/>

## Deployment Link

The Application is deployed at 

## [Sprint 4 Project Board](https://github.com/gvskalyan/rideshare/projects/4)

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




https://user-images.githubusercontent.com/97773629/164521229-d84e708c-d397-494d-a230-4f24cf11a3ba.mp4




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

### Screenshots

Screenshots of the Frontend UI can be found [here](frontend/Sprint4Frontend.md)

### Cypress Test Video

https://user-images.githubusercontent.com/34689959/164372511-a3dbfd37-d9a5-42f3-abf4-0eceaf1d235a.mp4


## Backend

### Initializing steps

- Install the dependencies using `go install`
- Create a table named `postride` in postgres.
- Check the .env file present in backend for specific user setting.

### Command to start backend server

```bash
cd backend
gin -i  --appPort 8081 --port 8080
```

### API Documentation link

Backend API documentation is available in the [link](backend/backend_doc.md)

### Deployed Link

Backend is deployed using Heroku and can be accesed using https://rideshare-se.herokuapp.com/

### Backend Test Video



https://user-images.githubusercontent.com/42022935/164538675-6b142d6b-dcf2-436f-9a72-bc63514e75a2.mp4



## To Do/ Roadmap

- 
- 

