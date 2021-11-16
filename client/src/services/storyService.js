import { jsonRequest } from "../utils/jsonRequest";

const baseUrl = "http://localhost:5000/data/stories";

async function getAll() {
    return await jsonRequest(`${baseUrl}?sortBy=_createdOn%20desc`);
}

const storyService = {
    getAll
}

export default storyService;