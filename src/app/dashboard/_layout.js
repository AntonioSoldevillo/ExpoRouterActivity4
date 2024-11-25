import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import DrawerContent from '../../components/Drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer
            drawerContent={DrawerContent}
            screenOptions={{
                drawerStyle: {
                    backgroundColor: '#141414', // Netflix dark background
                },
                drawerLabelStyle: {
                    color: '#ffffff', // White text for labels
                    fontSize: 16,
                },
                drawerInactiveTintColor: '#ffffff', // Ensures inactive text is white
                drawerActiveTintColor: '#ffffff', // Ensures active text is also white
            }}
        >
            <Drawer.Screen
                name="(tabs)" // This is the name of the page and must match the URL from root
                options={{
                    drawerLabel: 'Home',
                    title: 'Home',
                    drawerIcon: ({ focused }) => (
                        <MaterialCommunityIcons 
                            name={focused ? 'home' : 'home-outline'} 
                            size={20} 
                            color="#ffffff" // White icon
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="settings" // This is the name of the page and must match the URL from root
                options={{
                    drawerLabel: 'Settings',
                    title: 'Settings',
                    drawerIcon: ({ focused }) => (
                        <MaterialCommunityIcons 
                            name={focused ? 'cog' : 'cog-outline'} 
                            size={20} 
                            color="#ffffff" // White icon
                        />
                    ),
                }}
            />
        </Drawer>
    </GestureHandlerRootView>
  );
}
