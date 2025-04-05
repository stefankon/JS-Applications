import { get, post } from "./api.js";
import { getUserData } from "../utils.js";
import { getItemDetails } from "./dataColector.js";
import { mainPath as mainEl } from "../utils.js";

const tattooId = 0;
const userId = "";

const endpoints = {
    allLikes: (id) => `/data/likes?where=tattooId%3D%22${id}%22&distinct=_ownerId&count`,
    createLike: "/data/likes",
    likesByUserId: (id, userId) => `/data/likes?where=tattooId%3D%22${id}%22%20and%20_ownerId%3D%22${userId}%22&count`,
}


//Request to like Tattoo:
export async function createLike(id) {
        return post(endpoints.createLike, {id});
}

//Request to get the number of the likes for a Tattoo for a specific user
export async function getLikesByTattooId(tattooId) {
    const userData = getUserData();

    const requests = [get(endpoints.allLikes(tattooId))];

    if (userData) {
        requests.push(get(endpoints.likesByUserId(tattooId, userData._id)));
    }

    const [likes, hasLiked] = await Promise.all(requests);

    return {
        likes,
        hasLiked: Boolean(hasLiked)
    }
}