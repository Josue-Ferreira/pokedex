import PropTypes from "prop-types"

function NavBar ({pokemonIndex, setPokemonIndex, pokemonIndexMax}){
    const isPikachu = (index) => {
        if(index == 3)
            alert('pika pikachu !!!');
    }
    
    const handleClickPrevious = () => {
        if(pokemonIndex > 0){
            setPokemonIndex(pokemonIndex-1);
            isPikachu(pokemonIndex-1);
        }
    }
    
    const handleClickNext = () => {
        if(pokemonIndex < pokemonIndexMax-1){
            setPokemonIndex(pokemonIndex+1);
            isPikachu(pokemonIndex+1);
        }
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