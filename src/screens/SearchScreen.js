import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, FlatList, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import RestaurantList from "../components/RestaurantList";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(false);
  const searchResults = async term => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 20,
          term: term,
          location: "baltimore"
        }
      });
      setError(false);
      setResults(response.data.businesses);
    } catch (err) {
      setError(true);
    }
  };
  useEffect(() => {
    searchResults("steak");
  }, []);
  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={newSearchTerm => setSearchTerm(newSearchTerm)}
        onSearchSubmit={() => searchResults(searchTerm)}
      />
      <Text
        style={styles.searchText}
      >{`Search returned ${results.length} results`}</Text>
      {!error ? (
        <ScrollView style={styles.container}>
          <RestaurantList
            heading="Cheap Bites"
            data={results.filter(r => {
              return r.price !== undefined && r.price.length === 1;
            })}
          />
          <RestaurantList
            heading="Kinda Costly"
            data={results.filter(r => {
              return r.price !== undefined && r.price.length === 2;
            })}
          />
          <RestaurantList
            heading="Quite Expensive"
            data={results.filter(r => {
              return r.price !== undefined && r.price.length >= 3;
            })}
          />
          <RestaurantList
            heading="Unknown Prices"
            data={results.filter(r => {
              return r.price === undefined;
            })}
          />
        </ScrollView>
      ) : (
        <View>
          <Text style={styles.errorHeading}>Uh oh, something went wrong!</Text>
          <Text style={styles.errorSubheading}>
            Please check your connection and try again.
          </Text>
        </View>
      )}
    </>
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
  },
  container: {
    marginHorizontal: 30,
    marginVertical: 20,
    flex: 1
  }
});

export default SearchScreen;
