import Image from "next/image"

export interface CardProps {
    pokemonName: string
    imgLink: string
}

export default function Card({ pokemonName, imgLink }: CardProps) {
  return (
    <div className={`flex flex-col justify-start items-center w-[190px] h-[250px] bg-slate-300 bg-opacity-40 rounded-lg shadow-inner p-5`}>
        <Image src={imgLink} height={150} width={150} alt='image'/>
        <h3 className={`mt-auto text-lg`}>{pokemonName}</h3>
    </div>
  )
}
