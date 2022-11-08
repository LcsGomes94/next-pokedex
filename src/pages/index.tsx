import Head from 'next/head'
import { useState } from 'react'
import Body from '../components/Body'
import Header from '../components/Header'
import pokemonList from '../services/pokemonData.json'

export interface PokemonData {
  name: string
  imgUrl: string
}

interface HomeProps {
  firstPage: PokemonData[]
}

export default function Home({ firstPage }: HomeProps) {
  const [ darkMode, setDarkMode ] = useState(false)
  const [ pokemonList, setPokemonList ] = useState(firstPage)
  const [ page, setPage ] = useState(1)

  function handleDarkModeToggle () {
    setDarkMode(darkMode => !darkMode)
  }

  function handlePokemonList (pokemonList: PokemonData[], resetPage: boolean) {
    setPokemonList(pokemonList)
    resetPage ? handlePage(1) : false
  }

  function handlePage (pageNumber: number) {
    setPage(pageNumber)
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Pokédex by LcsGomes</title>
      </Head>
      
      <div className='dark:bg-gray-800'>
        <Header handleDarkModeToggle={handleDarkModeToggle} handlePokemonList={handlePokemonList} handlePage={handlePage}></Header>
        <Body pokemonList={pokemonList} handlePokemonList={handlePokemonList} page={page} handlePage={handlePage}></Body>
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const firstPage = pokemonList[0]

  return {
    props: {
      firstPage
    },
    revalidate: 60 * 60 * 24 * 30
  }
}