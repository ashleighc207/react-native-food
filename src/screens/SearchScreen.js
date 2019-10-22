import React from "react";
import { Text, StyleSheet, View } from "react-native";

const SearchScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Search Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20
  }
});

export default SearchScreen;
