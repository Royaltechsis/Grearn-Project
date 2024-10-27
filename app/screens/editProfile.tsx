import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function EditProfile() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSave = () => {
        // Here, you can handle the save action, e.g., API call to update the user info
        alert(`Saved!\nName: ${fullName}\nEmail: ${email}\nPhone: ${phoneNumber}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Edit Profile</Text>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Full Name</Text>
                <TextInput
                    style={styles.input}
                    value={fullName}
                    onChangeText={setFullName}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Phone Number</Text>
                <TextInput
                    style={styles.input}
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    keyboardType="phone-pad"
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleSave}>
                <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputContainer: {
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: 'black',
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: '#6CBC37',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});
