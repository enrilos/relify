import { jsonRequest } from "../utils/jsonRequest";

const baseUrl = "http://localhost:5000/stories";

async function getAll() {
    return await jsonRequest(baseUrl);
}

export default {
    getAll
}