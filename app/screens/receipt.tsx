import { Text, View, StyleSheet, Image, Pressable, Share } from 'react-native';
import { Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Receipt({ route }: { route: any }) {
  // Get transaction data passed via navigation
  const { transaction } = route.params;

  // Function to share receipt details
  const shareReceipt = async () => {
    try {
      await Share.share({
        message: `Receipt details:\n
        Amount: NGN ${transaction.amount}\n
        Status: ${transaction.status}\n
        Bank: ${transaction.bank}\n
        Date: ${transaction.date}\n
        Transaction ID: ${transaction.transactionId}`,
      });
    } catch (error) {
      alert('Error sharing receipt');
    }
  };

  // Function to handle issue reporting
  const reportIssue = () => {
    alert('Your issue has been reported!');
  };

  return (
    <View style={styles.container}>
      {/* First Section with amount and status */}
      <View style={styles.firstSection}>
        <Image source={require('../../assets/images/icon.png')} style={styles.imageIcon} />
        <Text style={[styles.textBold, styles.lightgrey]}>Amount</Text>
        <Text style={[styles.textAmount, styles.darkgrey]}>NGN {transaction.amount}</Text>
        <View style={styles.statusContainer}>
          <AntDesign name="checksquareo" color="lightgreen" size={18} />
          <Text style={[styles.textStatus, styles.textGreen]}>{transaction.type} {transaction.status}</Text>
        </View>
      </View>

      {/* Bank Information */}
      <View style={[styles.bankInfo, styles.firstSection]}>
        <View style={styles.bankRow}>
          <Text style={[styles.lightgrey, styles.textBold]}>Bank</Text>
          <Text style={[styles.darkgrey, styles.textBold]}>{transaction.bank}</Text>
        </View>
        <View style={styles.bankRow}>
          <Text style={[styles.lightgrey, styles.textBold]}>Account Number</Text>
          <Text style={[styles.darkgrey, styles.textBold]}>{transaction.accountNumber}</Text>
        </View>
        <View style={styles.bankRow}>
          <Text style={[styles.lightgrey, styles.textBold]}>Account Name</Text>
          <Text style={[styles.darkgrey, styles.textBold]}>{transaction.accountName}</Text>
        </View>
        <View style={styles.bankRow}>
          <Text style={[styles.lightgrey, styles.textBold]}>Time</Text>
          <Text style={[styles.darkgrey, styles.textBold]}>{transaction.time}</Text>
        </View>
        <View style={styles.bankRow}>
          <Text style={[styles.lightgrey, styles.textBold]}>Date</Text>
          <Text style={[styles.darkgrey, styles.textBold]}>{transaction.date}</Text>
        </View>
        <View style={styles.bankRow}>
          <Text style={[styles.lightgrey, styles.textBold]}>Transaction ID</Text>
          <Text style={[styles.darkgrey, styles.textBold]}>{transaction.transactionId}</Text>
        </View>
        {/* Add new fields if any */}
        <View style={styles.bankRow}>
          <Text style={[styles.lightgrey, styles.textBold]}>Transaction Fee</Text>
          <Text style={[styles.darkgrey, styles.textBold]}>{transaction.transactionFee}</Text>
        </View>
        <View style={styles.bankRow}>
          <Text style={[styles.lightgrey, styles.textBold]}>Payment Method</Text>
          <Text style={[styles.darkgrey, styles.textBold]}>{transaction.paymentMethod}</Text>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <Pressable
          style={[styles.button]}
          onPress={reportIssue}
        >
          <Text style={styles.textGreen}>Report an Issue</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.greenBg]}
          onPress={shareReceipt}
        >
          <Text style={styles.textWhite}>Share Receipt</Text>
        </Pressable>
      </View>
    </View>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f9fa',
  },
  firstSection: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    width: width - 50,
    alignItems: 'center',
  },
  imageIcon: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    position: 'absolute',
    top: -25,
    left: '50%',
    transform: [{ translateX: -25 }],
  },
  textBold: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#333',
  },
  lightgrey: {
    color: 'lightgray',
  },
  textWhite: {
    color: 'white',
  },
  darkgrey: {
    color: '#666',
  },
  greenBg: {
    backgroundColor: '#32CD32',
  },
  textGreen: {
    color: '#32CD32',
  },
  textAmount: {
    fontSize: 24,
    marginVertical: 8,
    color: '#000',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#e0f7e9',
    borderRadius: 10,
  },
  textStatus: {
    marginLeft: 10,
    fontSize: 16,
  },
  bankInfo: {
    marginTop: 20,
  },
  bankRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  buttonContainer: {
    width: '96%',
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    borderColor: '#32CD32',
    borderWidth: 1,
    borderRadius: 8,
    width: '48%',
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    elevation: 3,
    margin: 7,
  },
});
