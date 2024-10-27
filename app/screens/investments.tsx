import React from 'react';
import { View, Text, Pressable, StyleSheet, Image, ScrollView } from 'react-native';
import { Link } from 'expo-router';

export default function Investments() {
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
    function InvestItem({ item }): React.JSX.Element {
        return (
            <View style={styles.card}>
                <Image source={item.image} style={styles.image} />
                <View style={styles.cardContent}>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.harvestPeriod}>
                        Harvest Period: <Text style={styles.primaryColor}>{item.harvestPeriod}</Text>
                    </Text>
                    <Text style={styles.description}>{item.description}</Text>
                </View>
            </View>
        );
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Loop through investments array to render InvestItem */}
            {investments.map(item => (
                <InvestItem key={item.id} item={item} />
            ))}
        </ScrollView>
    );
}

// Styles
const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center',
    },
    card: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#6CBC37', // primary color border
        borderRadius: 10,
        backgroundColor: '#fff',
        marginBottom: 20,
        padding: 15,
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
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
        color: '#6CBC37', // primary color
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        color: '#555',
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#6CBC37',
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },
    linkText: {
        color: '#6CBC37',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
