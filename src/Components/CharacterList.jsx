import CharacterCard from "../Components/CharacterCard";

function CharacterList({ characters }) {
    return (
        <>
            <div className="CharacterList">
                {characters.map((character) => (
                    <CharacterCard key={character.id} character={character} />
                ))}
            </div>
        </>
    )
}

export default CharacterList
