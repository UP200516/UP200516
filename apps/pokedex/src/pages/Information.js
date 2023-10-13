import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { useParams, Link} from 'react-router-native';
import { getPokemonById } from '../services/pokeapi';
import PokemonInfo from '../components/PokemonInfo';

const Information = () => {

    const [pokemon, setPokemon] = useState(null);
    
    const {pokemonid} = useParams();

    useEffect(() => {
        const fetchPokemon = async () => {
            try{
                const InformacionPokemon = await getPokemonById(pokemonid);
                setPokemon(InformacionPokemon);
                console.log(pokemon);
            } catch (error) {
                console.log(error);
            }
        };
        fetchPokemon();
    }, [pokemonid]);

    return (
        <View>
            {pokemon ? (
                <PokemonInfo pokemon={pokemon} />
            ) : ( 
                <Text>Cargando...</Text>
            )}
        </View>
    );
}

export default Information;
