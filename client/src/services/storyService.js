import { jsonRequest } from "../utils/jsonRequest";

const baseUrl = "https://relify-project.herokuapp.com/data/stories";

async function getAll() {
    return await jsonRequest(`${baseUrl}?sortBy=_createdOn%20desc`);
}

async function getLatestThree() {
    return await jsonRequest(`${baseUrl}?sortBy=_createdOn%20desc&offset=0&pageSize=3`);
}

async function getUserStories(userId) {
    return await jsonRequest(`${baseUrl}?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

async function getUserStoriesByTitle(title, userId) {
    return await jsonRequest(`${baseUrl}?where=_ownerId%3D%22${userId}%22%20and%20title%20LIKE%20%22${title}%22`);
}

async function get(id) {
    return await jsonRequest(`${baseUrl}/${id}`);
}

async function getByTitle(title) {
    return await jsonRequest(`${baseUrl}?where=title%20LIKE%20%22${title}%22&sortBy=_createdOn%20desc`);
}

async function getStoriesByIds(joinedStoryIds) {
    // Mandatory due to the fact that should there be no liked stories by the user, the request throws and error.
    if (joinedStoryIds.length === 0) {
        return [];
    }

    return await jsonRequest(`${baseUrl}?where=_id%20IN%20(${joinedStoryIds})&sortBy=_createdOn%20desc`);
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
    getUserStoriesByTitle,
    get,
    getByTitle,
    getStoriesByIds,
    create,
    edit,
    deleteStory
}

export default storyService;