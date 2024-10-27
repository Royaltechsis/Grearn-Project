import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Alert, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';

export default function EnterBankDetails() {
  const router = useRouter();

  // State to store input values
  const [bankName, setBankName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [accountName, setAccountName] = useState('');

  // Function to handle proceed action
  const handleProceed = () => {
    // Basic validation
    if (!bankName || !accountNumber || !accountName) {
      Alert.alert('Error', 'Please fill out all fields');
      return;
    }

    // Proceed to next step (can be routing to another screen)
    router.push('./bankconfirmation'); // Adjust route as needed
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Bank Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your bank name"
        value={bankName}
        onChangeText={setBankName}
      />

      <Text style={styles.label}>Account Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your account number"
        value={accountNumber}
        onChangeText={setAccountNumber}
        keyboardType="numeric"
        maxLength={10}  // Assuming 10 digits for account number
      />

      <Text style={styles.label}>Account Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your account name"
        value={accountName}
        onChangeText={setAccountName}
      />

      {/* Proceed Button */}
      <Pressable style={styles.proceedButton} onPress={handleProceed}>
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
