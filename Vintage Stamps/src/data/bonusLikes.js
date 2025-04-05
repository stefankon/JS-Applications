import { get, post } from "./api.js";
import { getUserData } from "../utils.js";


const endpoint = {
    likesById: (stampsId) => `/data/likes?where=stampsId%3D%22${stampsId}%22&distinct=_ownerId&count`,
    like: "/data/likes",
    likeByUser: (stampsId, userId) => `/data/likes?where=stampsId%3D%22${stampsId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
}


export async function createLike(stampsId) {
    return post(endpoint.like, { stampsId });
}

export async function getLikesById(stampsId) {
    return get(endpoint.likesById(stampsId));
}

export async function hasUserLikes(stampsId) {
    const userData = getUserData();
    if (userData) {
        return get(endpoint.likeByUser(stampsId, userData._id));
    }
    return null;
}
