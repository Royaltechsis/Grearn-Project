import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{    
                tabBarActiveTintColor: 'white',
                    tabBarStyle: {
                    backgroundColor: '#6CBC37',
                },
                headerShown: false
            }}
        >
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'home-sharp' : 'home-outline'} size={26} color='white' />
                    ),
                }}
            />
            <Tabs.Screen
                name='cards'
                options={{
                    title: 'Cards',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'card' : 'card-outline'} size={26} color='white' />
                    ),
                }}
            />
            <Tabs.Screen
                name='trade'
                options={{
                    title: 'Trade',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'swap-vertical' : 'swap-vertical-outline'} size={26} color='white' />
                    ),
                }}
            />
            <Tabs.Screen
                name='investment'
                options={{
                    title: 'Investment',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'cash-sharp' : 'cash-outline'} size={26} color='white' />
                    ),
                }}
            />
            <Tabs.Screen
                name='profile'
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'person-sharp' : 'person-outline'} size={26} color='white' />
                    ),
                }}
            />
        </Tabs>
    );
}
