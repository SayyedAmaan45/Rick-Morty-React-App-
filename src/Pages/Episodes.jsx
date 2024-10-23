import { useState } from "react"
import EpisodeList from "../Components/EpisodeList"
import { episodes } from "../Data/data"
import SearchBar from "../Components/SearchBar";
import logo from "../img/logo.png"

function Episodes() {
    let [search, setSearch] = useState("");

    let filteredEpisodes = episodes.filter(episodes => {
        return episodes.name.toLowerCase().includes(search.toLowerCase())
    })
    return (
        <>
            <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                <img src={logo} alt="Rick & Morty Logo" style={{ width: '200px', height: 'auto' }} />
                <SearchBar search={search} setSearch={setSearch} />
                <h1>Rick And Morty Episodes</h1>
                <EpisodeList episodes={filteredEpisodes} />
            </div>
        </>
    )
}

export default Episodes