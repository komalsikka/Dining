import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useRestaurants from "../hooks/useRestaurants";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useRestaurants();

  const filterResultsByPrice = price => {
    // price === '$' || '$$' || '$$$'
    return results.filter(result => {
      return result.restaurant.price_range === price;
    });
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} restaurants!</Text>
      <ResultsList results={filterResultsByPrice(1)} title="Cost Effective" />
      <ResultsList results={filterResultsByPrice(2)} title="Bit Pricier" />
      <ResultsList results={filterResultsByPrice(3)} title="Big Spender" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
