import React, { useState } from 'react';
import { View, StyleSheet, Image, ScrollView, Text, Button, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { AntDesign } from '@expo/vector-icons';

export default function DropdownComponent() {
  const [selectedRegion, setSelectedRegion] = useState('Southwest');
  const [selectedPrice, setSelectedPrice] = useState('NGN 2000');

  // Dummy Data for Items
  const items = [
    { id: 1, name: 'Product 1', category: 'Electronics', price: 'NGN 5000', rating: '4.5' },
    { id: 2, name: 'Product 2', category: 'Clothing', price: 'NGN 3000', rating: '4.0' },
    { id: 3, name: 'Product 3', category: 'Books', price: 'NGN 2000', rating: '4.2' },
    { id: 4, name: 'Product 4', category: 'Shoes', price: 'NGN 7000', rating: '3.8' },
    { id: 5, name: 'Product 5', category: 'Accessories', price: 'NGN 1500', rating: '4.9' },
    { id: 6, name: 'Product 6', category: 'Groceries', price: 'NGN 2500', rating: '4.3' },
  ];

  function Item({ name, category, price, rating }: any) {
    const [quantity, setQuantity] = useState(1); // State for tracking quantity

    // Handle quantity change
    const handleIncrease = () => setQuantity(prevQuantity => prevQuantity + 1);
    const handleDecrease = () => {
      if (quantity > 1) {
        setQuantity(prevQuantity => prevQuantity - 1);
      } else {
        Alert.alert("Error", "Cannot purchase less than 1 item.");
      }
    };

    return (
      <View style={styles.itemContainer}>
        <View style={styles.itemDetails}>
          <Text style={styles.itemName}>{name}</Text>
          <Text style={styles.itemCategory}>{category}</Text>
          <View style={styles.quantityControl}>
            <AntDesign name="minussquare" color="black" size={25} onPress={handleDecrease} />
            <Text style={styles.quantityText}>{quantity}</Text>
            <AntDesign name="plussquare" color="black" size={25} onPress={handleIncrease} />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Buy" color="#4CAF50" />
            <Button title="Sell" color="#FF5722" />
          </View>
        </View>
        <View style={styles.priceRating}>
          <Text style={styles.priceText}>{price}</Text>
          <Text style={styles.ratingText}>Rating: {rating}</Text>
        </View>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.drcontainer}>
        {/* Dropdowns next to each other */}
        <View style={styles.dropupContainer}>
          {/* Region Dropdown */}
          <Picker
            selectedValue={selectedRegion}
            onValueChange={(itemValue) => setSelectedRegion(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Southwest" value="Southwest" />
            <Picker.Item label="Northwest" value="Northwest" />
            <Picker.Item label="Southeast" value="Southeast" />
          </Picker>

          {/* Price Dropdown */}
          <Picker
            selectedValue={selectedPrice}
            onValueChange={(itemValue) => setSelectedPrice(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="NGN 2000" value="NGN 2000" />
            <Picker.Item label="NGN 3000" value="NGN 3000" />
            <Picker.Item label="NGN 4000" value="NGN 4000" />
            <Picker.Item label="NGN 5000" value="NGN 5000" />
          </Picker>
        </View>
        <Image source={require('../../assets/images/History.png')} style={styles.image} />
      </View>

      {/* Scrollable List of Items */}
      <ScrollView>
        {items.map((item, index) => (
          <Item
            key={index}
            name={item.name}
            category={item.category}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  drcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'space-between',
  },
  image: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 10,
  },
  dropupContainer: {
    flexDirection: 'row',
  },
  picker: {
    width: 100,
    height: 30,
    marginHorizontal: 5,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
  },
  itemDetails: {
    flex: 3,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemCategory: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  quantityText: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
  },
  priceRating: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  ratingText: {
    fontSize: 14,
    color: '#999',
  },
});
