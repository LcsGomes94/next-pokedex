export default function SearchBar() {
  return (
    <input type="text" placeholder='Pokémon name' className={
        `p-3 rounded-md focus:bg-white bg-slate-50 placeholder-gray-900 placeholder-opacity-50 caret-slate-400 shadow-inner`}/>
  )
}
