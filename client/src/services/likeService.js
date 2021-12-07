import { jsonRequest } from "../utils/jsonRequest";

const baseUrl = "https://relify-project.herokuapp.com/data/likes";

async function likeStory(body) {
    return await jsonRequest(`${baseUrl}`, 'Post', body, true);
}

async function getStoryLikes(id) {
    return await jsonRequest(`${baseUrl}?where=storyId%3D%22${id}%22&distinct=_ownerId&count`);
}

async function hasUserLikedStory(storyId, userId) {
    // This check is mandatory owing to the fact that should userId be null, the request fails.
    if (userId === null || userId === undefined) {
        return 0;
    }
    return await jsonRequest(`${baseUrl}?where=storyId%3D%22${storyId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}

async function getUserLikedStoriesCount(id) {
    return await jsonRequest(`${baseUrl}?count&where=_ownerId%3D%22${id}%22`);
}

async function getUserLikedStoriesIds(id) {
    return await jsonRequest(`${baseUrl}?where=_ownerId%3D%22${id}%22&select=storyId`);
}

const likeService = {
    likeStory,
    getStoryLikes,
    hasUserLikedStory,
    getUserLikedStoriesCount,
    getUserLikedStoriesIds
}

export default likeService;