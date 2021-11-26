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
    if (userId === null || userId === undefined) {
        return 0;
    }
    return await jsonRequest(`${baseUrl}/likes?where=storyId%3D%22${storyId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}

async function getUserLikedStoriesCount(id) {
    return await jsonRequest(`${baseUrl}/likes?count&where=_ownerId%3D%22${id}%22`);
}

async function getUserLikedStoriesIds(id) {
    //http://localhost:5000/data/likes?where=_ownerId%3D%2231c8b64b-6fa0-465e-a64e-83aaa78d1b9e%22&select=storyId
    return await jsonRequest(`${baseUrl}/likes?where=_ownerId%3D%22${id}%22&select=storyId`);
}

async function getUserLikedStories(joinedStoryIds) {
    // Mandatory due to the fact that should there be no liked stories by the user, the request throws and error.
    if (joinedStoryIds.length === 0) {
        return [];
    }

    // http://localhost:5000/data/stories?where=_id%20IN%20(%221840a313-225c-416a-817a-9954d4609f7c%22,%20%22ff436770-76c5-40e2-b231-77409eda7a61%22)
    return await jsonRequest(`${baseUrl}/stories?where=_id%20IN%20(${joinedStoryIds})`);
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
    getUserLikedStoriesCount,
    getUserLikedStoriesIds,
    getUserLikedStories,
    create,
    edit,
    deleteStory
}

export default storyService;