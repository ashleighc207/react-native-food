import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  ScrollView,
  Image
} from "react-native";
import yelp from "../api/yelp";

const DetailScreen = ({ navigation }) => {
  const [result, setResult] = useState({});
  const busId = navigation.getParam("id");

  const getBusDetails = async busId => {
    const response = await yelp.get(`/${busId}`);
    setResult(response.data);
  };

  useEffect(() => {
    getBusDetails(busId);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{result.name}</Text>
      <FlatList
        data={result.photos}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 350,
    height: 300,
    borderRadius: 5,
    marginVertical: 20
  },
  container: {
    flex: 1,
    alignItems: "center"
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "rgba(88,156,180,0.95)",
    marginTop: 30,
    textAlign: "center"
  }
});

export default DetailScreen;
