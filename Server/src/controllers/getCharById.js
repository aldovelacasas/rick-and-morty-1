const URL = "https://rickandmortyapi.com/api/character/"
const axios = require ("axios")

const getCharById = async (request, response) => {

    try {
        const {id} = request.params;
    const {data} = await axios(`${URL}${id}`)
    
    let character = {
        id: data.id,
        name:data.name,
        status:data.status,
        species:data.species,
        origin:data.origin,
        image:data.image,
        gender:data.gender
    }
    return character.name ? response.json(character).status(200) : response.status(404).send("not found")

    } catch (error) {
        response.status(500).send(error.message)
        
    }
}


module.exports = {
    getCharById
}