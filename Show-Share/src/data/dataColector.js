import { get, post, put, del } from "./api.js";

const endpoints = {
  allswows: "/data/shows?sortBy=_createdOn%20desc",
  createDron: "/data/drones",
  dorneById: "/data/drones/",
  byName: (query) => `/data/drones?where=model%20LIKE%20%22${query}%22`,
};

//All items
export async function getAllShows() {
    return get(endpoints.allswows);    
}

//Create Item
export async function createDron(data) {
    return post(endpoints.createDron, data);
}

//Select Item
export async function getDroneDetails(id) {
  return get(endpoints.dorneById + id)
}
//Delet Item
export async function deleteDrone(id) {
  return del(endpoints.dorneById + id)
}
//Edit Item
export async function editDroneDetails(id,udtatedData) {
  debugger;
  return put((endpoints.dorneById + id), udtatedData) 
}
