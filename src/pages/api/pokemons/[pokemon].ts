import { NextApiRequest, NextApiResponse } from 'next'
import pokemonList from '../../../services/pokemonData.json'

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        if (+req.query.pokemon >= 1 && +req.query.pokemon <= 28) {
            const pageNumber = Number(req.query.pokemon)
            return res.json(pokemonList[pageNumber - 1])
        } else {
            const pokemonName = req.query.pokemon
            const pokemonFound = []
            pokemonList.forEach(pokemonArray => pokemonFound.push(...pokemonArray))

            const response = pokemonFound.filter(pokemon => pokemon.name.includes(pokemonName))
            
            res.json(response)
        }
    } else {
        res.status(405)
    }
}