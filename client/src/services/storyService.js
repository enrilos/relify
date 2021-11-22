import { jsonRequest } from "../utils/jsonRequest";

const baseUrl = "http://localhost:5000/data/stories";

async function getAll() {
    return await jsonRequest(`${baseUrl}?sortBy=_createdOn%20desc`);
}

async function getLatestThree() {
    return await jsonRequest(`${baseUrl}?sortBy=_createdOn%20desc&offset=0&pageSize=3`);
}

async function getUserStories(userId) {
    return await jsonRequest(`${baseUrl}?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

async function get(id) {
    return await jsonRequest(`${baseUrl}/${id}`);
}

async function create(story) {
    return await jsonRequest(`${baseUrl}`, 'Post', story, true);
}

async function edit(id, story) {
    return await jsonRequest(`${baseUrl}/${id}`, 'Put', story, true);
}

async function deleteStory(id) {
    return await jsonRequest(`${baseUrl}/${id}`, 'Delete', undefined, true);
}

const storyService = {
    getAll,
    getLatestThree,
    getUserStories,
    get,
    create,
    edit,
    deleteStory
}

export default storyService;