
let myFavorites = [];

const postFav = (request, response) => {
    let character = request.body;

    myFavorites.push(character)

    return response.status(200).send(myFavorites);

}

const deleteFav = (request, response) => {
    let {id} = request.params;

     myFavorites = myFavorites.filter((favorite) => 
    favorite.id !== +id);

    return response.status(200).send(myFavorites)
}


module.exports = {
    deleteFav,
    postFav
}