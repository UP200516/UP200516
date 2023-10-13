import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Link } from 'react-router-native';

const BackButton = () => {
    return (
        <Link to='/'>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Regresar</Text>
            </View>
        </Link>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#1E90FF',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default BackButton;
