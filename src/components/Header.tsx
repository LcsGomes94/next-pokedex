import Image from 'next/image'
import SearchBar from './SearchBar'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { PokemonData } from '../pages'

interface HeaderProps {
    handlePokemonList: (pokemonList: PokemonData[], resetPage: boolean) => void
    handlePage: (pageNumber: number) => void
}

export default function Header({ handlePokemonList, handlePage }: HeaderProps) {
  function handleDarkModeToggle () {
    document.documentElement.classList.toggle('dark')
  }
  
  return (
    <header className={`h-20 mb-10 border-b border-gray-300 dark:border-gray-600 caret-transparent`}>
        <div className={`max-w-screen-xl mx-auto h-full px-5 flex items-center`}>

          <div className='flex-1 flex sm:justify-center sm:min-w-[350px]'>
            <SearchBar handlePokemonList={handlePokemonList} handlePage={handlePage} />
          </div>

          <div className='flex-1 justify-center hidden md:flex min-w-[350px]'>
            <Image src='/pokedex.png' alt='Pokédex' height={50} width={277} quality={100}></Image>
          </div>

          <div className='flex-1 flex justify-center'>
            <button className='hover:opacity-60' onClick={handleDarkModeToggle}>
              <BsFillMoonStarsFill className='text-2xl dark:text-white'/>
            </button>
          </div>

        </div>
    </header>
  )
}
