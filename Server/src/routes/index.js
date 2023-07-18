const express = require("express")
const router = express.Router()
const {getCharById} = require ("../controllers/getCharById")
const {login} = require("../controllers/login")
const {postFav, deleteFav} = require ("../controllers/handleFavorites")

router.get("/character/:id", (request, response) => {
     getCharById(request, response);
});

router.get("/login", (request, response) => {
     login(request, response);
});

router.post("/fav", (request, response) => {
     postFav(request, response)
});

router.delete("/fav/:id", (request, response) => {
     deleteFav(request, response)
});
module.exports = router;