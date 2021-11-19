import { jsonRequest } from "../utils/jsonRequest";

const baseUrl = "http://localhost:5000/data/stories";

async function getAll() {
    return await jsonRequest(`${baseUrl}?sortBy=_createdOn%20desc`);
}

async function getLatestThree() {
    return await jsonRequest(`${baseUrl}?sortBy=_createdOn%20desc&offset=0&pageSize=3`);
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

const storyService = {
    getAll,
    getLatestThree,
    get,
    create,
    edit
}

export default storyService;