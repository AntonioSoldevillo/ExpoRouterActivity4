import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import DrawerContent from "../../components/Drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={DrawerContent}
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#141414", 
          },
          drawerLabelStyle: {
            color: "#ffffff", 
            fontSize: 16,
          },
          drawerInactiveTintColor: "#ffffff", 
          drawerActiveTintColor: "#ffffff", 
          headerStyle: {
            backgroundColor: "#292f33", 
          },
          headerTintColor: "#ffffff", 
        }}
      >
        
        <Drawer.Screen
          name="(tabs)" 
          options={({ route }) => {
            const currentTab = route.state?.routes[route.state.index]?.name || "Home";
            let title = "AntonioFlix"; 

            if (currentTab === "profile") title = "Profile";
            else if (currentTab === "settings") title = "Settings";

            return {
              drawerLabel: "Home",
              headerTitle: title, 
              drawerIcon: ({ focused }) => (
                <MaterialCommunityIcons
                  name={focused ? "home" : "home-outline"}
                  size={20}
                  color="#ffffff" 
                />
              ),
            };
          }}
        />
        <Drawer.Screen
          name="settings" 
          options={{
            drawerLabel: "Settings",
            title: "Settings",
            drawerIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name={focused ? "cog" : "cog-outline"}
                size={20}
                color="#ffffff" 
              />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
