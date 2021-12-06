import { jsonRequest } from "../utils/jsonRequest";

const baseUrl = "https://relify-project.herokuapp.com/data/comments";

async function get(id) {
    return await jsonRequest(`${baseUrl}/${id}`);
}

async function getStoryComments(storyId) {
    return await jsonRequest(`${baseUrl}?where=storyId%3D%22${storyId}%22&sortBy=_createdOn%20desc`);
}

async function create(comment) {
    return await jsonRequest(`${baseUrl}`, 'Post', comment, true);
}

async function edit(id, comment) {
    return await jsonRequest(`${baseUrl}/${id}`, 'Put', comment, true);
}

async function deleteComment(id) {
    return await jsonRequest(`${baseUrl}/${id}`, 'Delete', undefined, true);
}

const commentService = {
    get,
    getStoryComments,
    create,
    edit,
    deleteComment
}

export default commentService;