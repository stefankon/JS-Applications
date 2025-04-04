const itemName = 'userData';
export const headerPath = document.querySelector("header");
export const mainPath = document.querySelector("main");


export function setUserData(data) {
    return localStorage.setItem(itemName, JSON.stringify(data));
}

export function getUserData() {
    return JSON.parse(localStorage.getItem(itemName));
}

export function clearUserData() {
    localStorage.removeItem(itemName);
}

export function createSubmitHandler(callback) {
    return function (event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        callback(data, event.target);
    };
}



// export function updateNav() {
//     const userData = getUserData();

//     if (userData) {
//         document.querySelector('.user').style.display = 'block';
//         document.querySelector('.guest').style.display = 'none';
//     } else {
//         document.querySelector('.user').style.display = 'none';
//         document.querySelector('.guest').style.display = 'block';
//     }
// }