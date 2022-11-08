import Image from "next/image"

export interface CardProps {
    pokemonName: string
    imgLink: string
    cardRef?: any
}

function capitalizeLetter(string) {
  return string.replace(/(^|\W)(\w)/g, (match, a, b) => a + b.toUpperCase()).replaceAll('-', ' ');
}

function checkPriority(pokemonName: string) {
  if ( pokemonName === 'bulbasaur' || pokemonName === 'zarude-dada' || pokemonName === 'magearna-original'
  || pokemonName === 'minior-blue' || pokemonName === 'floette-eternal' || pokemonName === 'greninja-battle-bond'
  || pokemonName === 'fearow' || pokemonName === 'wartortle') return true
  else return false
}

export default function Card({ pokemonName, imgLink, cardRef }: CardProps) {
  return (
    <div ref={cardRef} className={`flex flex-col justify-start items-center w-[190px] h-[250px] bg-slate-300 bg-opacity-40 rounded-lg shadow-inner p-5`}>
        <Image src={imgLink} height={150} width={150} alt='not-found' priority={checkPriority(pokemonName)} />
        <h3 className={`mt-auto text-lg text-center dark:text-white `}>{capitalizeLetter(pokemonName)}</h3>
    </div>
  )
}
