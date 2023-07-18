const URL = "https://rickandmortyapi.com/api/character/"
const axios = require ("axios")

const getCharById = (request, response) => {
    const {id} = request.params;

    

    axios(`${URL}${id}`)
    .then(response => response.data)
    .then(({status, name, species, origin, image, gender})  => {
        if(name) {
            const character = {
            id,
            name,
            status,
            species,
            origin,
            image,
            gender
            }

            return response.status(200).json(character)
        }
            return response.status(400).send("Not found")

    })
    .catch(error => response.status(500).send(error.message))




}


module.exports = {
    getCharById
}