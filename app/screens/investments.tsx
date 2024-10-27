import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Investments() {
    const navigation = useNavigation();

    // Array of dummy investment items
    const investments = [
        {
            id: 1,
            name: 'Pepper',
            harvestPeriod: '4 months',
            description: 'Pepper farming is highly lucrative. Expected harvest is within 4 months.',
            image: require('../../assets/images/chicken.png'),
        },
        {
            id: 2,
            name: 'Tomato',
            harvestPeriod: '3 months',
            description: 'Tomato farming is highly lucrative. Expected harvest is within 3 months.',
            image: require('../../assets/images/chicken.png'),
        },
        {
            id: 3,
            name: 'Carrot',
            harvestPeriod: '5 months',
            description: 'Carrot farming is a reliable venture. Expected harvest is within 5 months.',
            image: require('../../assets/images/chicken.png'),
        },
        {
            id: 4,
            name: 'Maize',
            harvestPeriod: '6 months',
            description: 'Maize farming has great returns. Expected harvest is within 6 months.',
            image: require('../../assets/images/chicken.png'),
        },
    ];

    // Investment card component
    function InvestItem({ item }) {
        return (
            <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate('singleinvestment', { investment: item })}
            >
                <Image source={item.image} style={styles.image} />
                <View style={styles.cardContent}>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.harvestPeriod}>
                        Harvest Period: <Text style={styles.primaryColor}>{item.harvestPeriod}</Text>
                    </Text>
                    <Text style={styles.description}>{item.description}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {investments.map(item => (
                <InvestItem key={item.id} item={item} />
            ))}
        </ScrollView>
    );
}

// Styles for Investments page
const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center',
    },
    card: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#6CBC37',
        borderRadius: 10,
        backgroundColor: '#fff',
        marginBottom: 20,
        padding: 15,
        width: '100%',
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginRight: 15,
    },
    cardContent: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    harvestPeriod: {
        fontSize: 14,
        marginBottom: 10,
    },
    primaryColor: {
        color: '#6CBC37',
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        color: '#555',
    },
});
