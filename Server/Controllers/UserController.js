import { getUserData } from '../Services/UserService.js';

function loadHomePageData (req, res) {
    res.send(getUserData(123))
}

export { loadHomePageData };