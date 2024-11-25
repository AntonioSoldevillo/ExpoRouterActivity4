import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";

const movies = [
  { id: 1, title: "1899", image: require("../../../assets/1899.jpg") },
  { id: 2, title: "Assassin's Creed", image: require("../../../assets/assassinscreed.jpg") },
  { id: 3, title: "Bird Box", image: require("../../../assets/birdbox.jpg") },
  { id: 4, title: "Money Heist", image: require("../../../assets/moneyheist.jpg") },
  { id: 5, title: "Murder Mystery", image: require("../../../assets/murdermystery.jpg") },
  { id: 6, title: "Rebecca", image: require("../../../assets/rebecca.jpg") },
];

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.featuredSection}>
        <Image source={require("../../../assets/1899.jpg")} style={styles.featuredImage} />
        <Text style={styles.featuredTitle}>Featured: 1899</Text>
      </View>

      
      <ScrollView style={styles.gridSection} contentContainerStyle={styles.gridContainer}>
        {movies.map((movie) => (
          <TouchableOpacity key={movie.id} style={styles.gridItem}>
            <Image source={movie.image} style={styles.movieImage} />
            <Text style={styles.movieTitle}>{movie.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000", 
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  featuredSection: {
    marginBottom: 20,
    alignItems: "center",
  },
  featuredImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  featuredTitle: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
  gridSection: {
    flex: 1,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gridItem: {
    width: "48%", 
    marginBottom: 15,
  },
  movieImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  movieTitle: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
    textAlign: "center",
  },
});
