import PropTypes from "prop-types"

function NavBar ({pokemonList, setPokemonIndex}){
    const isPikachu = (index) => {
        if(index == 3)
            alert('pika pikachu !!!');
    }
    const handleClickPokemon = (index) => {
        setPokemonIndex(index);
        isPikachu(index);
    }
    
    return(
        pokemonList.map((pokemon, index) =>(
            <button onClick={() => handleClickPokemon(index)} key={pokemon.name}>{pokemon.name}</button>
        ))
    );
}

NavBar.propTypes = {
    pokemonList: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string
    })).isRequired,
    setPokemonIndex: PropTypes.func.isRequired
}

export default NavBar;

// function NavBar ({pokemonIndex, setPokemonIndex, pokemonIndexMax}){
//     const isPikachu = (index) => {
//         if(index == 3)
//             alert('pika pikachu !!!');
//     }
    
//     const handleClickPrevious = () => {
//         if(pokemonIndex > 0){
//             setPokemonIndex(pokemonIndex-1);
//             isPikachu(pokemonIndex-1);
//         }
//     }
    
//     const handleClickNext = () => {
//         if(pokemonIndex < pokemonIndexMax-1){
//             setPokemonIndex(pokemonIndex+1);
//             isPikachu(pokemonIndex+1);
//         }
//     }
    
//     return(
//         <div>
//             <button onClick={handleClickPrevious}>Précédent</button>
//             <button onClick={handleClickNext}>Suivant</button>
//         </div>
//     );
// }

// NavBar.propTypes = {
//     pokemonIndex: PropTypes.number.isRequired,
//     setPokemonIndex: PropTypes.func.isRequired,
//     pokemonIndexMax: PropTypes.number.isRequired
// }