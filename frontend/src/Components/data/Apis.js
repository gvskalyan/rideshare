//const SERVER_URL = ''
const SERVER_URL = 'https://rideshare-se.herokuapp.com'

const ENDPOINTS = {
    signup: () => '/signup',
    login: () => '/login',
    postaride: () => '/postaride',
    searcharide: () => '/searcharide',
    bookaride: () => '/bookride',
    getUser: () => '/auth/user',
    logout: () => '/logout'
}

const getRequest = (url, resolve, reject) => {
    fetch(url).then(response => {
        if (response.status >= 200 && response.status <= 299) {
            response.json().then(result => {
                resolve(result)
            })
        } else {
            reject({ code: response.status, msg: 'Error occurred' })
        }
    }).catch(error => reject({ code: 999, msg: 'Unknown error occurred' }))
}

const postRequest = (url, data, resolve, reject) => {
    fetch(url, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: data
    }).then(response => {
        if (response.status >= 200 && response.status <= 299) {
            response.json().then(result => {
                resolve(result)
            })
        } else {
            reject({ code: response.status, msg: 'Error occurred' })
        }
    }).catch(error => reject({ code: 999, msg: 'Unknown error occurred' }))
}

const data = {
    login: (loginData) => new Promise((resolve, reject) => {
        const url = `${SERVER_URL}${ENDPOINTS.login()}`
        console.log(url);
        postRequest(url, loginData, resolve, reject)
    }),

    signup: (signupData) => new Promise((resolve, reject) => {
        const url = `${SERVER_URL}${ENDPOINTS.signup()}`
        postRequest(url, signupData, resolve, reject)
    }),

    postaride: (ride) => new Promise((resolve,reject) => {
        const url = `${SERVER_URL}${ENDPOINTS.postaride()}`
        postRequest(url, ride, resolve, reject)
    }),

    getUser: () => new Promise((resolve,reject) => {
        const url = `${SERVER_URL}${ENDPOINTS.getUser()}`
        getRequest(url, resolve, reject)
    }),

    logout: () => new Promise((resolve,reject) =>{
        const url = `${SERVER_URL}${ENDPOINTS.logout()}`
        postRequest(url, resolve, reject)
    }),

    userDetails: (token) => new Promise((resolve,reject) => {
        const url = `${SERVER_URL}${ENDPOINTS.user()}`
        getRequest(url, token, resolve, reject)
    }),

    searcharide: (searchData) => new Promise((resolve,reject) => {
        const url = `${SERVER_URL}${ENDPOINTS.searcharide()}`
        postRequest(url, searchData, resolve, reject)
    }),

    bookaride: (bookRideData) => new Promise((resolve,reject) => {
        const url = `${SERVER_URL}${ENDPOINTS.bookaride()}`
        postRequest(url, bookRideData, resolve, reject)
    }),
}

export default data