import { jsonRequest } from "./jsonRequest.js";

const baseUrl = 'http://localhost:5000/users';

function getAuthToken() {
    return localStorage.getItem('authToken');
}

function getEmail() {
    return localStorage.getItem('email');
}

function getUserId() {
    return localStorage.getItem('userId');
}

function isLoggedIn() {
    const result = getAuthToken();
    return result !== null && result !== undefined;
}

async function login(user) {
    const response = await jsonRequest(`${baseUrl}/login`, 'Post', user);
    localStorage.setItem('authToken', response.accessToken);
    localStorage.setItem('userId', response._id);
    localStorage.setItem('email', response.email);
    return response;
}

async function register(user) {
    const response = await jsonRequest(`${baseUrl}/register`, 'Post', user);
    localStorage.setItem('authToken', response.accessToken);
    localStorage.setItem('userId', response._id);
    localStorage.setItem('email', response.email);
    return response;
}

async function logout() {
    await jsonRequest(`${baseUrl}/logout`, 'Get', undefined, true, true);
    localStorage.clear();
}

const authApi = {
    getAuthToken,
    getEmail,
    getUserId,
    isLoggedIn,
    login,
    register,
    logout
}

export default authApi;