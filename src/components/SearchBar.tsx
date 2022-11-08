import { ChangeEvent, useEffect, useRef, useState } from "react"
import { PokemonData } from "../pages"

interface SearchBarProps {
  handlePokemonList: (pokemonList: PokemonData[], resetPage: boolean) => void
  handlePage: (pageNumber: number) => void
}

export default function SearchBar({ handlePokemonList, handlePage }: SearchBarProps) {
  const [inputValue, setInputValue] = useState('')

  function handleInputValue (e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value)
  }
  
  const searchedBefore = useRef(false)

  useEffect(() => {
    const url = `http://localhost:3000/api/pokemons/${inputValue.toLocaleLowerCase()}`

    const getData = setTimeout(() => {
      if (inputValue.length > 1) {
        handlePage(999)
        fetch(url).then(res => res.json()).then(res => handlePokemonList(res, false))
        searchedBefore.current = true
      } else if (searchedBefore.current) {
        fetch('http://localhost:3000/api/pokemons/1').then(res => res.json()).then(res => handlePokemonList(res, true))
      }
    }, 200)

    return () => clearTimeout(getData)
  }, [inputValue])
  

  return (
    <div className="relative flex justify-start">
      <input type="text" placeholder='Pokémon name' value={inputValue} onChange={handleInputValue} className={
        `p-3 pr-9 rounded-md focus:bg-white bg-slate-50 placeholder-gray-900 placeholder-opacity-50 caret-slate-400 shadow-inner`}/>
      <div className={`absolute right-1 top-2`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.7} stroke="#121212" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    </div>
  )
}
