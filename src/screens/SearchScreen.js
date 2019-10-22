import React, { useState } from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import SearchBar from "../components/SearchBar";
import RestaurantList from "../components/RestaurantList";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(false);
  const searchResults = async () => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 20,
          term: searchTerm,
          location: "baltimore"
        }
      });
      setError(false);
      setResults(response.data.businesses);
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };
  return (
    <View>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={newSearchTerm => setSearchTerm(newSearchTerm)}
        onSearchSubmit={() => searchResults()}
      />
      <Text
        style={styles.searchText}
      >{`Search returned ${results.length} results`}</Text>
      {!error ? (
        <FlatList
          data={results}
          renderItem={({ item }) => {
            return <RestaurantList />;
          }}
        ></FlatList>
      ) : (
        <View>
          <Text style={styles.errorHeading}>Uh oh, something went wrong!</Text>
          <Text style={styles.errorSubheading}>
            Please check your connection and try again.
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20
  },
  searchText: {
    fontSize: 12,
    marginLeft: 32
  },
  errorHeading: {
    fontSize: 25,
    color: "#f64b4b",
    marginHorizontal: 30,
    marginTop: 30,
    textAlign: "center"
  },
  errorSubheading: {
    fontSize: 16,
    color: "#f64b4b",
    marginHorizontal: 30,
    marginTop: 10,
    textAlign: "center"
  }
});

export default SearchScreen;
