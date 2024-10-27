import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Alert, Dimensions } from 'react-native';

export default function WithdrawalScreen() {
  const [balance] = useState(15000); // Example available balance, replace with dynamic data as needed
  const [withdrawalAmount, setWithdrawalAmount] = useState('');
  const [pin, setPin] = useState('');

  // Function to handle withdrawal
  const handleWithdraw = () => {
    // Basic validation
    if (!withdrawalAmount || !pin) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    // Ensure withdrawal amount is valid
    if (parseFloat(withdrawalAmount) > balance) {
      Alert.alert('Error', 'Insufficient balance');
      return;
    }

    // Transaction logic here (e.g., API call)
    Alert.alert('Success', 'Transaction successful');
    
    // Reset input fields after transaction
    setWithdrawalAmount('');
    setPin('');
  };

  return (
    <View style={styles.container}>
      {/* Available balance display */}
      <Text style={styles.label}>Available Balance</Text>
      <Text style={styles.balanceText}>₦{balance.toFixed(2)}</Text>

      {/* Withdrawal amount input */}
      <Text style={styles.label}>Withdrawal Amount</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter amount"
        value={withdrawalAmount}
        onChangeText={setWithdrawalAmount}
        keyboardType="numeric"
      />

      {/* PIN input */}
      <Text style={styles.label}>Enter PIN</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your PIN"
        value={pin}
        onChangeText={setPin}
        secureTextEntry={true}
        keyboardType="numeric"
        maxLength={4}  // Assuming 4-digit PIN
      />

      {/* Proceed Button */}
      <Pressable style={styles.proceedButton} onPress={handleWithdraw}>
        <Text style={styles.proceedButtonText}>Proceed</Text>
      </Pressable>
    </View>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  balanceText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  input: {
    width: width - 40,
    padding: 15,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 20,
    fontSize: 16,
  },
  proceedButton: {
    marginTop: 30,
    backgroundColor: '#32CD32',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  proceedButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
