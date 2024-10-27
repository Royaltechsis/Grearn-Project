import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function ChangePassword() {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleChangePassword = () => {
        // Here, you can handle the change password action, e.g., API call to update the password
        if (newPassword === confirmPassword) {
            alert(`Password changed!\nOld Password: ${oldPassword}\nNew Password: ${newPassword}`);
        } else {
            alert('New password and confirm password do not match.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Change Password</Text>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Old Password</Text>
                <TextInput
                    style={styles.input}
                    value={oldPassword}
                    onChangeText={setOldPassword}
                    secureTextEntry
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>New Password</Text>
                <TextInput
                    style={styles.input}
                    value={newPassword}
                    onChangeText={setNewPassword}
                    secureTextEntry
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Confirm New Password</Text>
                <TextInput
                    style={styles.input}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
                <Text style={styles.buttonText}>Change Password</Text>
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
