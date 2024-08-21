import { getUserData, create } from '../Services/UserService.js';

function loadHomePageData (req, res) {
    res.send(getUserData(123))
}

function signUp (req, res) {
    res.status(200).send(create(req.body));
}

export { loadHomePageData, signUp };