import React from 'react';
import { Image, Text, View, StyleSheet, Dimensions } from 'react-native';
import BackButton from './BackButton';

const { width, height } = Dimensions.get('window');

const PokemonInfo = ({ pokemon }) => {
    const isSmallScreen = width < 375;
    return (
        <View style={[styles.container, isSmallScreen && styles.smallScreenContainer]}>
            <View style={styles.contentContainer}>
                <Image source={{ uri: pokemon.sprites.front_default }} style={styles.pokemonImage} />
                <Text style={styles.title}>Información del Pokémon</Text>
                <Text style={styles.text}>Nombre: {pokemon.name || '?'}</Text>
                <Text style={styles.text}>Altura: {pokemon.height || '?' } dm</Text>
                <Text style={styles.text}>Experiencia Base: {pokemon.base_experience || '?'}</Text>
                <Text style={styles.text}>Orden: {pokemon.order || '?'}</Text>
                <Text style={styles.text}>Tipos: {pokemon.types ? pokemon.types.map(type => type.type.name).join(', ') : '?'}</Text>
                <Text style={styles.text}>Habilidades: {pokemon.abilities ? pokemon.abilities.map(ability => ability.ability.name).join(', ') : '?'}</Text>
                {pokemon.stats ? (
                    pokemon.stats.map(stat => (
                        <Text key={stat.stat.name} style={styles.text}>{stat.stat.name}: {stat.base_stat}</Text>
                    ))
                ) : (
                    <Text style={styles.text}>?</Text>
                )}
            </View>
            <BackButton />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentContainer: {
        backgroundColor: '#FF5252',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        marginBottom: 10,
    },
    pokemonImage: {
        width: 100,
        height: 100,
    },
    smallScreenContainer: {
        padding: 10, 
    },
});

export default PokemonInfo;
