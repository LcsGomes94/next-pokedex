import { NextApiRequest, NextApiResponse } from 'next'
import pokemonList from '../../../services/pokemonData.json'

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        const pageNumber = Number(req.query.page)
        return res.json(pokemonList[pageNumber - 1])
    }
}