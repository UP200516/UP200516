import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, Image, TextInput, ActivityIndicator } from 'react-native';
import { Link } from 'react-router-native';

// Services
import { getPokemonByName } from '../services/pokeapi';
import PokemonList from '../components/PokemonList';

function Home() {
    const [pokemonName, setPokemonName] = useState('');
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleChangeText = (namePokemon) => setPokemonName(namePokemon);

    const handlePress = async () => {
        setLoading(true);
        setError(false);
        try {
            const pokeInformation = await getPokemonByName(pokemonName);
            setPokemon(pokeInformation);
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                {loading && <ActivityIndicator style={{ width: 'auto', height: 250 }} size='large' color='#E53939' />}
                {pokemon && (
                    <Link to={`/information/${pokemon.id}`}>
                        <Image
                            style={{ height: 250, width: 250 }}
                            source={{
                                uri: pokemon?.sprites?.front_default
                            }}
                        />
                    </Link>
                )}
                {(!pokemon || error) && (
                    <Image
                        style={{ height: 250, width: 250 }}
                        source={require('../../assets/pokebola.png')}
                    />
                )}
                <View style={styles.inputs}>
                    <TextInput
                        onChangeText={handleChangeText}
                        placeholder='Search a Pokemon!'
                    />
                    <Button
                        onPress={handlePress}
                        title='Search'
                    />
                </View>
                <View style={styles.filters}>
                    <Text>Filters!!!</Text>
                    <PokemonList style={styles.pokemonList} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    main: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    inputs: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    filters: {
        marginTop: 20,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    loader: {
        width: 'auto',
        height: 250,
    },
    pokeballImage: {
        height: 250,
        width: 250,
    },
    pokemonImage: {
        height: 250,
        width: 250,
    },
    // Agregar estilos para el botón, imagen, etc., si es necesario
});

export default Home;
