
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


