import { jsonRequest } from "../utils/jsonRequest";

const baseUrl = "http://localhost:5000/data";

async function getAll() {
    return await jsonRequest(`${baseUrl}/stories?sortBy=_createdOn%20desc`);
}

async function getLatestThree() {
    return await jsonRequest(`${baseUrl}/stories?sortBy=_createdOn%20desc&offset=0&pageSize=3`);
}

async function getUserStories(userId) {
    return await jsonRequest(`${baseUrl}/stories?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

async function get(id) {
    return await jsonRequest(`${baseUrl}/stories/${id}`);
}

async function likeStory(body) {
    return await jsonRequest(`${baseUrl}/likes`, 'Post', body, true);
}

async function getStoryLikes(id) {
    return await jsonRequest(`${baseUrl}/likes?where=storyId%3D%22${id}%22&distinct=_ownerId&count`);
}

async function hasUserLikedStory(storyId, userId) {
    // This check is mandatory owing to the fact that should userId be null, the request fails.
    if(userId === null || userId === undefined) {
        return 0;
    }
    return await jsonRequest(`${baseUrl}/likes?where=storyId%3D%22${storyId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}

async function create(story) {
    return await jsonRequest(`${baseUrl}/stories`, 'Post', story, true);
}

async function edit(id, story) {
    return await jsonRequest(`${baseUrl}/stories/${id}`, 'Put', story, true);
}

async function deleteStory(id) {
    return await jsonRequest(`${baseUrl}/stories/${id}`, 'Delete', undefined, true);
}

const storyService = {
    getAll,
    getLatestThree,
    getUserStories,
    get,
    likeStory,
    getStoryLikes,
    hasUserLikedStory,
    create,
    edit,
    deleteStory
}

export default storyService;