import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function TabComponent() {
  const [selectedTab, setSelectedTab] = useState('South West');

  // Function to handle tab clicks
  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  // Data for each tab
  const itemsData = {
    'South West': [
      { name: 'Item 1', category: 'Category 1', price: '$100', rate: '5.0', image: 'https://via.placeholder.com/50' },
      { name: 'Item 2', category: 'Category 2', price: '$150', rate: '4.5', image: 'https://via.placeholder.com/50' },
    ],
    'North West': [
      { name: 'Item 3', category: 'Category 3', price: '$200', rate: '4.0', image: 'https://via.placeholder.com/50' },
      { name: 'Item 4', category: 'Category 4', price: '$250', rate: '4.8', image: 'https://via.placeholder.com/50' },
    ],
    'South East': [
      { name: 'Item 5', category: 'Category 5', price: '$300', rate: '5.0', image: 'https://via.placeholder.com/50' },
      { name: 'Item 6', category: 'Category 6', price: '$350', rate: '4.9', image: 'https://via.placeholder.com/50' },
    ],
  };

  // Item component to display individual items
  const Item = ({ name, category, price, rate, image }: { name: string; category: string; price: string; rate: string; image: string }) => {
    return (
      <View style={styles.itemContainer}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <Image source={{ uri: image }} style={styles.itemImage} />
            <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{name}</Text>
                <Text style={styles.itemCategory}>{category}</Text>
            </View>
        </View>
        <View>
            <Text style={styles.itemPrice}>{price}</Text>
            <Text style={styles.itemRate}>Rating: {rate}</Text>
        </View>

      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Horizontal ScrollView for tabs */}
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.tabsContainer}>
        {/* Tab 1 */}
        <TouchableOpacity style={styles.tab} onPress={() => handleTabClick('South West')}>
          <Text style={[styles.tabText, selectedTab === 'South West' && styles.activeTabText]}>South West</Text>
        </TouchableOpacity>
        {/* Tab 2 */}
        <TouchableOpacity style={styles.tab} onPress={() => handleTabClick('North West')}>
          <Text style={[styles.tabText, selectedTab === 'North West' && styles.activeTabText]}>North West</Text>
        </TouchableOpacity>
        {/* Tab 3 */}
        <TouchableOpacity style={styles.tab} onPress={() => handleTabClick('South East')}>
          <Text style={[styles.tabText, selectedTab === 'South East' && styles.activeTabText]}>South East</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Display items based on selected tab */}
      <View style={styles.contentContainer}>
        {itemsData[selectedTab].map((item: typeof itemsData[keyof typeof itemsData][number], index: number) => (
          <Item
            key={index}
            name={item.name}
            category={item.category}
            price={item.price}
            rate={item.rate}
            image={item.image}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  tabsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tab: {
    marginRight: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
  },
  tabText: {
    fontSize: 16,
    color: 'black',
  },
  activeTabText: {
    fontWeight: 'bold',
    color: '#6CBC37',
  },
  contentContainer: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  itemImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  itemCategory: {
    fontSize: 14,
    color: 'gray',
  },
  itemPrice: {
    fontSize: 14,
    color: 'green',
  },
  itemRate: {
    fontSize: 14,
    color: 'orange',
  },
});
