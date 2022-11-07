import SearchBar from './SearchBar'

export default function Header() {
  return (
    <header className={`h-20 mb-10 border-b border-gray-300 caret-transparent`}>
        <div className={`max-w-[1440px] mx-auto h-full px-5 flex justify-between items-center`}>
            <h1 className='text-5xl font-bold text-slate-500'>Pokédex</h1>
            <SearchBar></SearchBar>
        </div>
    </header>
  )
}
