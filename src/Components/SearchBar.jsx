
function SearchBar({setSearch}) {
   
    function handleSearch(e){
        e.preventDefault();
        setSearch(e.target.value)
    };

  return (
    <>
    <div className="SearchBar">
        <input type="text" placeholder="Search Your Favorite Character From Rick & Morty" onChange={handleSearch}/>
        <button type="submit">Search</button>
    </div>
    </>
  )
}

export default SearchBar;