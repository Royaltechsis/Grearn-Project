import { AntDesign, EvilIcons, Ionicons } from '@expo/vector-icons';
import { View, Text, ScrollView, Image, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function Profile() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.banner} />
            <View style={styles.profileInfo}>
                <Link href='../screens/profileImage'>
                    <Image 
                    source={{ uri: 'https://example.com/profile-image.jpg' }} 
                    style={styles.profileImage} 
                    />
                </Link>
                <Text style={styles.username}>Username</Text>
                <Text style={styles.email}>Email</Text>
            </View>
            <View style={styles.settingsSection}>
                <Text style={styles.sectionTitle}>General</Text>
                <Link style={styles.settingItem} href='../screens/changePassword'>
                <View  style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',}}    >
                    <Ionicons name="settings-outline" color="black" size={25} />
                    <View style={styles.settingTextContainer}>
                        <Text style={styles.settingTitle}>Settings</Text>
                        <Text style={styles.settingSubtitle}>Manage passwords</Text>
                    </View>
                    
                </View>
                </Link>
                <Link href='../screens/editProfile' style={styles.settingItem}>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center',}}>
                    <AntDesign name="user" color="black" size={25} />
                    <View style={styles.settingTextContainer}>
                        <Text style={styles.settingTitle}>Personal Information</Text>
                        <Text style={styles.settingSubtitle}>Edit your information</Text>
                    </View>
                </View>
                </Link>
                <Text style={styles.sectionTitle}>Support</Text>
                <View style={styles.settingItem}>
                    <AntDesign name="user" color="black" size={25} />
                    <View style={styles.settingTextContainer}>
                        <Text style={styles.settingTitle}>Personal Information</Text>
                        <Text style={styles.settingSubtitle}>Edit your information</Text>
                    </View>
                </View>
                <View style={styles.settingItem}>
                    <AntDesign name="user" color="black" size={25} />
                    <View style={styles.settingTextContainer}>
                        <Text style={styles.settingTitle}>Personal Information</Text>
                        <Text style={styles.settingSubtitle}>Edit your information</Text>
                    </View>
                </View>
                <View style={styles.settingItem}>
                    <AntDesign name="user" color="black" size={25} />
                    <View style={styles.settingTextContainer}>
                        <Text style={styles.settingTitle}>Personal Information</Text>
                        <Text style={styles.settingSubtitle}>Edit your information</Text>
                    </View>
                </View>

            </View>
            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    banner: {
        height: 200,
        backgroundColor: '#6CBC37', // Primary color
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    profileInfo: {
        alignItems: 'center',
        marginTop: -50, // Overlap the banner
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: 'white',
        marginBottom: 10,
    },
    username: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    email: {
        color: 'gray',
    },
    settingsSection: {
        padding: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    settingItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
    },
    settingTextContainer: {
        flex: 1,
        marginLeft: 10,
    },
    settingTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    settingSubtitle: {
        color: 'gray',
    },
});
