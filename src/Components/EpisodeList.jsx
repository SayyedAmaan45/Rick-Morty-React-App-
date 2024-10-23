import EpisodeCard from "../Components/EpisodesCard"

function EpisodeList({episodes}) {
    return (
        <>
            <div className="EpisodesList">
                {episodes.map((episode)=>(
                    <EpisodeCard key={episode.id} episode={episode}/>
                ))}
            </div>

        </>
    )
}

export default EpisodeList