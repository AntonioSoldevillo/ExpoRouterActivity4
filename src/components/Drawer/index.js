import { View, Image, Text, StyleSheet } from 'react-native'; 
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { useSafeAreaInsets } from 'react-native-safe-area-context'; 
import { useRouter } from 'expo-router';

export default function DrawerContent(props) {
    const router = useRouter();
    const year = new Date().getFullYear();  

    const handleLogout = async () => {
        router.replace('/');
    };

    const { top, bottom } = useSafeAreaInsets();

    return (
        <View style={{ flex: 1, backgroundColor: '#141414' }}> 
            <DrawerContentScrollView
                {...props}
                scrollEnabled={true}
                contentContainerStyle={{ paddingTop: top }}
                style={styles.drawerScrollView}
            >
              
                <View style={styles.avatarSection}>
                    <Image 
                        source={require('../../assets/avatar.png')} 
                        style={styles.profileImage} 
                    /> 
                    <Text style={styles.userName}>Antonio Soldevillo</Text>
                </View>
                
          
                <DrawerItemList 
                    {...props}
                    labelStyle={styles.drawerItemLabel} 
                    itemStyle={styles.drawerItem}      
                />
                
                <DrawerItem
                    label="Logout"
                    icon={({ size }) => (
                        <MaterialCommunityIcons name='logout' color="#ffffff" size={size} />
                    )}
                    labelStyle={styles.drawerItemLabel} 
                    onPress={handleLogout}
                />
            </DrawerContentScrollView>

           
            <View style={[styles.footer, { paddingBottom: bottom }]}>
                <Text style={styles.footerText}>
                    Copyright &copy; {year}. All rights reserved
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerScrollView: {
        backgroundColor: '#141414', 
    },
    avatarSection: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
        paddingBottom: 20,
        backgroundColor: '#141414', 
    },
    profileImage: {
        alignSelf: 'center',
        height: 120,
        width: 120,
        borderRadius: 60,
        borderWidth: 3,
        borderColor: '#db0000', 
    },
    userName: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
    drawerItem: {
        backgroundColor: '#141414', 
    },
    drawerItemLabel: {
        color: '#ffffff', 
        fontSize: 16,
    },
    footer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#141414', 
    },
    footerText: {
        color: '#aaaaaa',
        fontSize: 14,
    },
});
