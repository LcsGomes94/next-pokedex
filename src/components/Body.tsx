import { PokemonData } from '../pages'
import Card from './Card'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useCallback, useRef } from 'react'

interface BodyProps{
    pokemonList: PokemonData[]
    handlePokemonList: (pokemonList: PokemonData[], resetPage: boolean) => void
    handlePage: (pageNumber: number) => void
    page: number
}

export default function Body({ pokemonList, handlePokemonList, page, handlePage }: BodyProps) {
    const [animate] = useAutoAnimate<HTMLDivElement>()

    const observer = useRef<IntersectionObserver>()

    const lastElementRef = useCallback(node => {
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(async entries => {
            if (entries[0].isIntersecting && page <= 28) {
                await fetch(`/api/pokemons/${page + 1}`).then(res => res.json())
                    .then(res => handlePokemonList([...pokemonList, ...res], false))
                handlePage(page + 1)
            }
        })
        if (node) observer.current.observe(node)
    },[page])

    return (
        <div className='pb-10'>
            <main ref={animate} className={`max-w-[1440px] mx-auto w-full flex flex-wrap gap-3 justify-center p-1 caret-transparent`}>
                {pokemonList.map((pokemonData, i) => {
                    if (pokemonList.length === i + 1) {
                        return <Card key={pokemonData.name} pokemonName={pokemonData.name} imgLink={pokemonData.imgUrl} cardRef={lastElementRef} />
                    } else {
                        return <Card key={pokemonData.name} pokemonName={pokemonData.name} imgLink={pokemonData.imgUrl} />
                    }
                })}
            </main>
        </div>
    )
}
function handlePokemonList(res: any): any {
    throw new Error('Function not implemented.')
}

