import PropTypes from "prop-types"

function NavBar ({pokemonIndex, setPokemonIndex, pokemonIndexMax}){
    const handleClickPrevious = () => {
        pokemonIndex > 0 ? setPokemonIndex(pokemonIndex-1) : setPokemonIndex(0);
    }
    
    const handleClickNext = () => {
        pokemonIndex < pokemonIndexMax-1 ? setPokemonIndex(pokemonIndex+1) : setPokemonIndex(pokemonIndexMax-1); 
    }
    
    return(
        <div>
            <button onClick={handleClickPrevious}>Précédent</button>
            <button onClick={handleClickNext}>Suivant</button>
        </div>
    );
}

NavBar.propTypes = {
    pokemonIndex: PropTypes.number.isRequired,
    setPokemonIndex: PropTypes.func.isRequired,
    pokemonIndexMax: PropTypes.number.isRequired
}

export default NavBar;