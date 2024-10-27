import { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function WithdrawalScreen() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // Options data for withdrawal
  const options = [
    {
      id: 'bankTransfer',
      title: 'Withdraw to Bank',
      description: 'Transfer your funds directly to your bank account.',
      // icon: require('../../assets/images/bank-icon.png'),  // Replace with actual bank icon
    },
    {
      id: 'cardWithdrawal',
      title: 'Withdraw via Card',
      description: 'Receive your withdrawal to your debit or credit card.',
      // icon: require('../../assets/images/card-icon.png'),  // Replace with actual card icon
    },
  ];

  // Function to handle option selection
  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
  };

  // Function to handle proceed
  const handleProceed = () => {
    if (selectedOption === 'bankTransfer') {
      router.push('./banktransfer');
    } else if (selectedOption === 'cardWithdrawal') {
      router.push('/withdraw/card-withdrawal');
    } else {
      alert('Please select a withdrawal option.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Options for bank transfer and card withdrawal */}
      {options.map((option) => (
        <Pressable
          key={option.id}
          style={[
            styles.optionContainer,
            selectedOption === option.id && styles.optionSelected,
          ]}
          onPress={() => handleOptionSelect(option.id)}
        >
          <View style={styles.optionContent}>
            <Image source={option.icon} style={styles.optionIcon} />
            <View style={styles.optionText}>
              <Text style={styles.optionTitle}>{option.title}</Text>
              <Text style={styles.optionDescription}>{option.description}</Text>
            </View>
          </View>
          <AntDesign name="right" size={24} color="#666" />
        </Pressable>
      ))}

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
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    width: width - 40,
  },
  optionSelected: {
    borderColor: '#FF4500',  // Highlight selected option with a red border for withdrawal
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionIcon: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  optionText: {
    justifyContent: 'center',
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  optionDescription: {
    fontSize: 14,
    color: '#666',
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
