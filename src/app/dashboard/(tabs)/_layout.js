import React from "react";
import { View } from "react-native";
import { Tabs } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#000000", 
          margin: 0,
          padding: 5,
          minHeight: 60,
          paddingBottom: 8,
          borderTopWidth: 1,
          borderTopColor: "#db0000", 
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "bold",
        },
        tabBarActiveTintColor: "#db0000", 
        tabBarInactiveTintColor: "#ffffff", 
      }}
      initialRouteName="index"
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <View>
              <MaterialCommunityIcons
                name={focused ? "home" : "home-outline"}
                color={focused ? "#db0000" : "#ffffff"} 
                size={24}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused }) => (
            <View>
              <MaterialCommunityIcons
                name={focused ? "account" : "account-outline"}
                color={focused ? "#db0000" : "#ffffff"}
                size={24}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarLabel: "Settings",
          tabBarIcon: ({ focused }) => (
            <View>
              <MaterialCommunityIcons
                name={focused ? "cog" : "cog-outline"}
                color={focused ? "#db0000" : "#ffffff"}
                size={24}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;