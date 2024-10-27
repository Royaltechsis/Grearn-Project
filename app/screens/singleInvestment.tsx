import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function SingleInvestment({ route }): React.JSX.Element {
    const { investment } = route.params;

    return (
        <ScrollView style={styles.container}>
            <Image source={investment.image} style={styles.investmentImage} />

            <Text style={styles.title}>{investment.name}</Text>

            <View style={styles.statsContainer}>
                <View style={styles.statItem}>
                    <Text>Harvest Period</Text>
                    <Text>{investment.harvestPeriod}</Text>
                </View>
            </View>

            <Text style={styles.description}>{investment.description}</Text>

            <TouchableOpacity style={styles.investButton} onPress={() => addToActivePackages(investment)}>
                <Text style={styles.investButtonText}>Invest Now</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

// Styles for SingleInvestment page
const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    investmentImage: {
        width: '100%',
        height: 200,
        borderRadius: 8,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 12,
    },
    statsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    statItem: {
        width: '48%',
        marginVertical: 8,
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        marginVertical: 16,
    },
    investButton: {
        backgroundColor: '#6CBC37',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 16,
    },
    investButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

// Add to active packages logic
const addToActivePackages = (investment: any) => {
    console.log('Investment added to active packages:', investment);
};
