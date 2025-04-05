import { get, post, put, del } from "./api.js";

const endpoints = {
  allitems: "/data/stamps?sortBy=_createdOn%20desc",
  createItem: "/data/stamps",
  itemById: "/data/stamps/",
  byName: (query) => ``,
};

//All items
export async function getAllitems() {
    return get(endpoints.allitems);    
}

//Create Itemf
export async function createItem(data) {
    return post(endpoints.createItem, data);
}

//Select Item
export async function getItemDetails(id) {
  return get(endpoints.itemById + id)
}
//Delet Item
export async function deleteItem(id) {
  return del(endpoints.itemById + id)
}
//Edit Item
export async function editItemDetails(id,udtatedData) {
  // debugger;
  return put((endpoints.itemById + id), udtatedData) 
}
