import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, FlatList, ScrollView } from "react-native";
import yelp from "../api/yelp";

const DetailScreen = ({ navigation }) => {
  const busId = navigation.getParam("id");
  return (
    <View>
      <Text>{busId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default DetailScreen;
