import { PokemonData } from '../pages'
import Card from './Card'
import { CardProps } from './Card'

interface BodyProps{
    pokemonList: PokemonData[]
}

export default function Body({ pokemonList }: BodyProps) {
  return (
    <div>
        <main className={`max-w-[1440px] mx-auto w-full flex flex-wrap gap-3 justify-center p-1 caret-transparent`}>
            {pokemonList.map(pokemonData => {
                return (
                    <Card key={pokemonData.name} pokemonName={pokemonData.name} imgLink={pokemonData.imgUrl}></Card>
                )
            })}
        </main>
    </div>
  )
}
