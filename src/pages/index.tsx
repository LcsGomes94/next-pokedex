import Head from 'next/head'
import Body from '../components/Body'
import Header from '../components/Header'

export interface PokemonData {
  name: string
  imgUrl: string
}

interface HomeProps {
  firstPage: PokemonData[]
}

export default function Home({ firstPage }: HomeProps) {
  return (
    <>
      <Head>
        <title>Pokédex by LcsGomes</title>
      </Head>
      
      <Header></Header>
      <Body pokemonList={firstPage}></Body>
    </>
  )
}

export const getStaticProps = async () => {
  const resp = await fetch('http://localhost:3000/api/pokemons/1')
  const firstPage = await resp.json()

  return {
    props: {
      firstPage
    },
    revalidate: 60 * 60 * 24 * 30
  }
}