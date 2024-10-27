import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker'; // Make sure to install expo-image-picker

export default function ProfileImage() {
    const [imageUri, setImageUri] = useState(null);

    const handleSelectFromDevice = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            // setImageUri(result.assets[0].uri);
        }
    };

    const handleTakePhoto = async () => {
        const result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            // setImageUri(result.assets[0].uri);
        }
    };

    return (
        <View style={styles.container}>
            {imageUri ? (
                <Image source={{ uri: imageUri }} style={styles.profileImage} />
            ) : (
                <View style={styles.placeholderImage} />
            )}
            <TouchableOpacity style={styles.button} onPress={handleSelectFromDevice}>
                <Text style={styles.buttonText}>Select from Device</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleTakePhoto}>
                <Text style={styles.buttonText}>Take a Photo</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginVertical: 20,
    },
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 20,
    },
    placeholderImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: '#ccc', // Placeholder color
        marginBottom: 20,
    },
    button: {
        borderColor: '#6CBC37',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        width: '80%',
        alignItems: 'center',
        marginVertical: 5,
    },
    buttonText: {
        color: '#6CBC37',
        fontWeight: 'bold',
    },
});
