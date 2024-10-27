import React from 'react';
import { View, Text, Pressable, StyleSheet, Image, ScrollView } from 'react-native';
import { Link } from 'expo-router';

export default function ActivePackages() {
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
    function PackageItem({ item }): React.JSX.Element {
        return (
            <View style={styles.card}>
                <Image source={item.image} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                    <Text style={styles.harvest}>Harvest Period: {item.harvestPeriod}</Text>
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text>Principal</Text>
                        <Text>Profit</Text>
                    </View>
                    <View style={styles.column}>
                        <Text>Principal</Text>
                        <Text>Profit</Text>
                    </View>
                </View>
            </View>
        );
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {investments.map((item) => (
                <PackageItem key={item.id} item={item} />
            ))}
            {/* Invest More Button */}
            <Pressable style={styles.button}>
                <Link href="../screens/investments" style={styles.linkText}>
                    Invest More
                </Link>
            </Pressable>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    card: {
        marginBottom: 20,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#fff',
        elevation: 3,
    },
    image: {
        width: '90%',
        height: 150,
        alignSelf: 'center',
    },
    textContainer: {
        padding: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        marginTop: 5,
        fontSize: 14,
    },
    harvest: {
        marginTop: 10,
        fontStyle: 'italic',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    column: {
        flex: 1,
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    linkText: {
        color: '#fff',
        fontSize: 16,
    },
});
