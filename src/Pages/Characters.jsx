import { useState } from "react";
import SearchBar from "../Components/SearchBar"
import CharacterList from "../Components/CharacterList"
import { characters } from "../Data/data"
import logo from "../img/logo.png"


function Characters() {
    let [search, setSearch] = useState("");

    let filteredCharacters = characters.filter(characters => {
        return characters.name.toLowerCase().includes(search.toLowerCase());
    })

    return (
        <>
            <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                <img src={logo} alt="Rick & Morty Logo" style={{ width: '200px', height: 'auto' }} />
                <SearchBar search={search} setSearch={setSearch} />
                <h2>Rick And Morty Characters</h2>
                <CharacterList characters={filteredCharacters} />
            </div>
        </>
    )
}

export default Characters;