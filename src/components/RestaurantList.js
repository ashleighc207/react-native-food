import React from "react";
import { Text, View, StyleSheet, Image, FlatList } from "react-native";

const RestaurantList = ({ data, heading }) => {
  console.log(data);
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>{heading}</Text>
      <Text style={styles.results}>Results: {data.length} matches</Text>
      <FlatList
        data={data}
        horizontal
        showHorizontalScrollIndicator={false}
        keyExtractor={data => data.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.container}>
              <Text style={styles.title}>
                {item.name.length > 21
                  ? item.name.substr(0, 21) + "..."
                  : item.name}
              </Text>
              <Image source={{ uri: item.image_url }} style={styles.image} />

              <Text style={styles.ratingsText}>
                Rating: {item.rating} <Text style={styles.pipe}>|</Text>{" "}
                {item.review_count} Reviews
              </Text>
            </View>
          );
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginBottom: 50
  },
  container: {
    marginHorizontal: 10
  },
  image: {
    width: 250,
    height: 200,
    borderRadius: 5
  },
  heading: {
    fontSize: 30,
    fontWeight: "600",
    marginBottom: 5,
    color: "rgba(88,156,180,0.95)"
  },
  title: {
    fontSize: 18,
    marginVertical: 10,
    color: "rgba(88,156,180,0.95)"
  },
  results: {
    marginLeft: 10,
    marginTop: 10
  },
  ratingsText: {
    alignSelf: "center",
    marginVertical: 5
  },
  pipe: {
    color: "rgba(88,156,180,0.95)",
    display: "flex",
    fontWeight: "bold"
  }
});

export default RestaurantList;
