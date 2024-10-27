import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
export default function Cards() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Manage Cards</Text>
            </View>
            <View style={styles.addCardContainer}>
                <TouchableOpacity onPress={() => console.log('Add New Card')} style={styles.buttonContainer}>
                    <Link to="/add-card" href='../screens/cardForm' style={styles.button}>Add Card</Link>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
const styles = {
    container: {
        flexGrow: 1,
        backgroundColor: 'white',
        padding: 20,
    },
    headerContainer: {
        marginBottom: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    addCardContainer: {
        alignItems: 'center', // Center the button
    },
    buttonContainer: {
        marginTop: 10,
        width: '100%', // Full width for the button
        alignItems: 'center', // Center content
    },
    button:{
        backgroundColor : '#6CBC37',
        color: 'white',
        width : '90%',
        padding : 15,
        borderRadius : 10,
        alignSelf : 'center',
        margin: 20,
        fontSize: 18,
      }
    // You can keep your existing button style here
   
};