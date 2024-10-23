
function EpisodesCard({episode}) {
  return (
    <>
    <div className="EpisodesCard">
        <h2>{episode.name}</h2>
        <img src={episode.image} alt={episode.name}/>
        <p>Air Date:{episode.air_date}</p>
        <p>Episodes:{episode.episode}</p>
        <p>Characters:{episode.characters.join(",")}</p>
    </div>
    </>
  )
}

export default EpisodesCard