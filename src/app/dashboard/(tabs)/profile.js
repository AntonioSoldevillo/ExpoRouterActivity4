import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";

const Profile = () => {
  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.avatarSection}>
        <Image source={require("../../../assets/profilepic.jpg")} style={styles.profileImage} />
        <Text style={styles.name}>Antonio Soldevillo</Text>
        <Text style={styles.email}>soldevillo.antonio09@gmail.com</Text>
      </View>

      
      <View style={styles.sectionBox}>
        <Text style={styles.bioTitle}>Bio</Text>
        <Text style={styles.bioText}>
          Passionate about movies and TV shows. Always up for a good mystery thriller or action-packed adventure.
        </Text>
      </View>

      
      <View style={styles.sectionBox}>
        <Text style={styles.favoritesTitle}>Favorite Shows</Text>
        <View style={styles.favoritesList}>
          <Text style={styles.favoritesText}>- Money Heist</Text>
          <Text style={styles.favoritesText}>- Stranger Things</Text>
          <Text style={styles.favoritesText}>- The Witcher</Text>
        </View>
      </View>

      
      <View style={styles.sectionBox}>
        <Text style={styles.recentActivityTitle}>Recent Activity</Text>
        <View style={styles.recentList}>
          <Text style={styles.recentActivityText}>- Watched: 1899</Text>
          <Text style={styles.recentActivityText}>- Watched: Assassin's Creed</Text>
          <Text style={styles.recentActivityText}>- Watched: Bird Box</Text>
        </View>
      </View>

      
      <View style={styles.buttonSection}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000", 
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  avatarSection: {
    alignItems: "center",
    marginBottom: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#db0000", 
  },
  name: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
  },
  email: {
    color: "#aaaaaa",
    fontSize: 16,
    marginTop: 5,
  },

 
  sectionBox: {
    backgroundColor: "#222222", 
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
  },
  bioTitle: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  bioText: {
    color: "#aaaaaa",
    fontSize: 16,
    marginTop: 10,
  },
  favoritesTitle: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  favoritesList: {
    marginTop: 10,
    paddingLeft: 10,
  },
  favoritesText: {
    color: "#aaaaaa",
    fontSize: 16,
  },
  recentActivityTitle: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  recentList: {
    marginTop: 10,
    paddingLeft: 10,
  },
  recentActivityText: {
    color: "#aaaaaa",
    fontSize: 16,
  },

  
  buttonSection: {
    width: "100%",
    marginBottom: 20, 
    alignItems: "center", 
  },
  button: {
    backgroundColor: "#db0000", 
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 15,
    width: "80%", 
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  logoutButton: {
    backgroundColor: "#444444", 
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 10,
    alignItems: "center",
  },
  logoutButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});