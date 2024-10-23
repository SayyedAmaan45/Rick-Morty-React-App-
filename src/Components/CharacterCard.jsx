
function CharacterCard({ character }) {
    return (
        <>
            <div className="CharacterCard">
                <img src={character.image} alt={character.name} />
                <h3>{character.name}</h3>
                <p>Status:{character.status}</p>
                <p>Species:{character.species}</p>
            </div>
        </>
    )
}

export default CharacterCard