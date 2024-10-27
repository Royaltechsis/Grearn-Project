import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

// Sample data structure for a single investment
const investment = {
  image: 'https://example.com/investment.jpg', // Replace with actual image URL
  title: 'Investment Title',
  roi: '12%',
  price: '$5000',
  harvestPeriod: '6 months',
  minInvest: '$1000',
  insuranceAvailable: true,
  description: 'This investment offers great returns over a short period of time.',
  ratings: 4.5,
};

export default function SingleInvestment({ route, navigation }) {
  // You can get the data from the previous screen using `route.params`
  // const { investment } = route.params;  // Example if data is passed via navigation

  return (
    <ScrollView style={styles.container}>
      {/* Image of the investment */}
      <Image source={{ uri: investment.image }} style={styles.investmentImage} />

      {/* Title of the investment */}
      <Text style={styles.title}>{investment.title}</Text>

      {/* Statistics of the investment */}
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text>ROI</Text>
          <Text>{investment.roi}</Text>
        </View>
        <View style={styles.statItem}>
          <Text>Price</Text>
          <Text>{investment.price}</Text>
        </View>
        <View style={styles.statItem}>
          <Text>Harvest Period</Text>
          <Text>{investment.harvestPeriod}</Text>
        </View>
        <View style={styles.statItem}>
          <Text>Min Investment</Text>
          <Text>{investment.minInvest}</Text>
        </View>
      </View>

      {/* Insurance Tag */}
      <View style={styles.insuranceTag}>
        <Text style={styles.insuranceText}>
          {investment.insuranceAvailable ? 'Insurance Available' : 'No Insurance'}
        </Text>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Small 32px text saying 'inf' */}
      <Text style={styles.smallInfo}>inf</Text>

      {/* Description of the investment */}
      <Text style={styles.description}>{investment.description}</Text>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Ratings of the investment */}
      <Text style={styles.ratings}>Ratings: {investment.ratings}/5</Text>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Invest Now Button */}
      <TouchableOpacity style={styles.investButton} onPress={() => addToActivePackages(investment)}>
        <Text style={styles.investButtonText}>Invest Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

// Styles for the component
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
  insuranceTag: {
    backgroundColor: investment.insuranceAvailable ? '#dff0d8' : '#f2dede',
    padding: 8,
    borderRadius: 4,
    marginVertical: 12,
  },
  insuranceText: {
    color: investment.insuranceAvailable ? '#3c763d' : '#a94442',
    fontWeight: 'bold',
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: 12,
  },
  smallInfo: {
    fontSize: 32,
    fontWeight: '300',
    color: '#888',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
  ratings: {
    fontSize: 16,
    fontWeight: '500',
  },
  investButton: {
    backgroundColor: '#007bff',
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
const addToActivePackages = (investment) => {
  // Add logic to save investment to the active packages component
  // This could involve updating the state, saving to a database, etc.
  console.log('Investment added to active packages:', investment);
};
