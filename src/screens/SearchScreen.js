import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchResults = () => {
    console.log("searching!");
  };
  return (
    <View>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={newSearchTerm => setSearchTerm(newSearchTerm)}
        onSearchSubmit={() => searchResults()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20
  }
});

export default SearchScreen;
