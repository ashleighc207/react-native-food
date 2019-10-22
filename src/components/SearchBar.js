import React from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const SearchBar = ({ searchTerm, onSearchTermChange, onSearchSubmit }) => {
  return (
    <View style={styles.searchBar}>
      <MaterialIcons name="search" style={styles.searchIcon} />
      <TextInput
        style={styles.textInput}
        placeholder="Search"
        onEndEditing={onSearchSubmit}
        value={searchTerm}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={newSearchTerm => onSearchTermChange(newSearchTerm)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20
  },
  searchBar: {
    backgroundColor: "rgba(88,156,180,0.2)",
    marginHorizontal: 20,
    height: 50,
    borderRadius: 10,
    marginVertical: 30,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  textInput: {
    paddingLeft: 5,
    height: 50,
    fontSize: 16,
    marginRight: 15,
    flex: 2,
    fontSize: 20
  },
  searchIcon: {
    fontSize: 30,
    alignSelf: "center",
    marginHorizontal: 10,
    color: "rgba(88,156,180,0.95)"
  }
});

export default SearchBar;
