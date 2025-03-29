import { get, post, put, del } from "./api.js";

const endpoints = {
  allDrones: "/data/drones?sortBy=_createdOn%20desc",
  createDron: "",
  dorneById: "",
  byName: (query) => `/data/drones?where=model%20LIKE%20%22${query}%22`,
};

//All items
export async function getAllDorones() {
    return get(endpoints.allDrones);    
}

export async function createDron(data) {
    return post(endpoints.createDron, data);
}

//Create Item

//Select Item

//Delet Item

//Edit Item
