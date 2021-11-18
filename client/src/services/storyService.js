import { jsonRequest } from "../utils/jsonRequest";

const baseUrl = "http://localhost:5000/data/stories";

async function getAll() {
    return await jsonRequest(`${baseUrl}?sortBy=_createdOn%20desc`);
}

async function getLatestThree() {
    return await jsonRequest(`${baseUrl}?sortBy=_createdOn%20desc&offset=0&pageSize=3`);
}

async function create(story) {
    return await jsonRequest(`${baseUrl}`, 'Post', story, true);
}

const storyService = {
    getAll,
    getLatestThree,
    create
}

export default storyService;