import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Card = ({ title, imageUrl, description }) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <View style={styles.cardContent}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'yellow',  // Yellow background color
        borderRadius: 10,
        overflow: 'hidden',
        margin: 10,
        elevation: 5,
        borderColor: 'white',
        borderWidth: 1,
    },
    image: {
        width: '100%',
        height: 200,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    cardContent: {
        padding: 15,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#333',
    },
    description: {
        fontSize: 16,
        color: '#555',
    },
});

export default Card;
