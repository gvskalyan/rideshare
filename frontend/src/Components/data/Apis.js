const SERVER_URL = 'http://localhost:8080'
const VERSION = '/v1'

const ENDPOINTS = {
    signup: () => '/signup',
    login: () => '/login',
    register: () => '/users/register',
    getPostById: (postId) => `/posts/getOne/${postId}`,
    postaride: () => '/postaride',
    searcharide: () => '/searcharide',
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
    getPosts: (userId) => new Promise((resolve, reject) => {
        const url = `${SERVER_URL}${VERSION}${ENDPOINTS.getAllPostsOfUser(userId)}`
        getRequest(url, resolve, reject)
    }),

    getPostById: (postId) => new Promise((resolve, reject) => {
        const url = `${SERVER_URL}${VERSION}${ENDPOINTS.getPostById(postId)}`
        getRequest(url, resolve, reject)
    }),

    createPost: (postData) => new Promise((resolve, reject) => {
        const url = `${SERVER_URL}${VERSION}${ENDPOINTS.createPost()}`
        postRequest(url, postData, resolve, reject)
    }),

    getCommentsOfPost: (postId) => new Promise((resolve, reject) => {
        const url = `${SERVER_URL}${VERSION}${ENDPOINTS.getCommentsOfPost(postId)}`
        getRequest(url, resolve, reject)
    }),

    createComment: (commentData) => new Promise((resolve, reject) => {
        const url = `${SERVER_URL}${VERSION}${ENDPOINTS.createComment()}`
        postRequest(url, commentData, resolve, reject)
    }),

    login: (loginData) => new Promise((resolve, reject) => {
        const url = `${ENDPOINTS.login()}`
        console.log(url);
        postRequest(url, loginData, resolve, reject)
    }),

    signup: (signupData) => new Promise((resolve, reject) => {
        const url = `${ENDPOINTS.signup()}`
        postRequest(url, signupData, resolve, reject)
    }),

    postaride: (ride) => new Promise((resolve,reject) => {
        const url = `${ENDPOINTS.postaride()}`
        postRequest(url, ride, resolve, reject)
    }),

    getUser: () => new Promise((resolve,reject) => {
        const url = `${ENDPOINTS.getUser()}`
        getRequest(url, resolve, reject)
    }),

    logout: () => new Promise((resolve,reject) =>{
        const url = `${ENDPOINTS.logout()}`
        postRequest(url, resolve, reject)
    }),

    userDetails: (token) => new Promise((resolve,reject) => {
        const url = `${ENDPOINTS.user()}`
        getRequest(url, token, resolve, reject)
    }),

    searcharide: (searchData) => new Promise((resolve,reject) => {
        const url = `${ENDPOINTS.searcharide()}`
        postRequest(url, searchData, resolve, reject)
    }),
}

export default data