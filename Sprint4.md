
# Sprint 4

## Application Description


### Work Done / Deliverables

- Implement Booking History (Feature)
- CI/CD pipeline that evaluates the code integrity and provides platform for timed deployment.
- Fixed bugs that occur when the user is not logged in (earlier the backend thread crashes due to this)
- Use Heroku to deploy Backend and write Custom buildpack script for go-lang. (Since the repo is a multi app with separate backend and frontend scripts, in order for the project root to stay devoid of multiple deployment related files and hacks, opted to have own buildpack for Heroku)
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


### Cypress Test Video


## Backend

### API Documentation link

Backend API documentation is available in the [link](backend/backend_doc.md)
