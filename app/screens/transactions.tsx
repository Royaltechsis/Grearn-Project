import { FlatList, Text, View, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define a type for your transaction
interface Transaction {
  id: string;
  amount: number;
  status: string;
  bank: string;
  accountNumber: string;
  accountName: string;
  time: string;
  date: string;
  transactionId: string;
  transactionFee: number;
  paymentMethod: string;
}

// Define a type for your navigation prop
type NavigationProp = StackNavigationProp<{
  Receipt: { transaction: Transaction };
}>;

// Mock transactions data
const transactions: Transaction[] = [
  {
    id: '1',
    amount: 5000,
    status: 'Successful',
    bank: 'Zenith Bank',
    accountNumber: '1234567890',
    accountName: 'John Doe',
    time: '14:23',
    date: '2024-10-01',
    transactionId: 'ABC12345',
    transactionFee: 100,
    paymentMethod: 'Transfer',
  },
  {
    id: '2',
    amount: 2500,
    status: 'Pending',
    bank: 'GT Bank',
    accountNumber: '0987654321',
    accountName: 'Jane Smith',
    time: '09:12',
    date: '2024-10-02',
    transactionId: 'XYZ67890',
    transactionFee: 50,
    paymentMethod: 'Card',
  },
  // Add more transactions here
];

export default function Transactions() {
  const navigation = useNavigation<NavigationProp>();

  // Render each transaction item
  const renderItem = ({ item }: { item: Transaction }) => (
    <Pressable
      style={styles.transactionContainer}
      onPress={() => navigation.navigate('Receipt', { transaction: item })}
    >
      <View style={styles.transactionDetails}>
        <Text style={styles.textBold}>NGN {item.amount}</Text>
        <Text style={styles.textLight}>{item.date} - {item.status}</Text>
      </View>
      <Text style={styles.textGreen}>View Details</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 16,
  },
  transactionContainer: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  transactionDetails: {
    flexDirection: 'column',
  },
  textBold: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333',
  },
  textLight: {
    color: 'gray',
    marginTop: 5,
  },
  textGreen: {
    color: '#32CD32',
    fontWeight: 'bold',
  },
});
