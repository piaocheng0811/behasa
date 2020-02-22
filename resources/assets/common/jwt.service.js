const getUser = USER_KEY => {
    let data=window.localStorage.getItem(USER_KEY);
    return JSON.parse(data);
};
const saveUser = (USER_KEY,user) => {
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
};
const destroyUser = USER_KEY => {
    window.localStorage.removeItem(USER_KEY);
};
export default {getUser, saveUser, destroyUser};
