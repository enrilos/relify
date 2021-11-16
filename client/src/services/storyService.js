import { jsonRequest } from "../utils/jsonRequest";

const baseUrl = "http://localhost:5000/data/stories";

async function getAll() {
    return await jsonRequest(`${baseUrl}?sortBy=_createdOn%20desc`);
}

async function getLatestThree() {
    return await jsonRequest(`${baseUrl}?sortBy=_createdOn%20desc&offset=0&pageSize=3`);
}

const storyService = {
    getAll,
    getLatestThree
}

export default storyService;