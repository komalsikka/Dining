import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ title, results }) => {
  //TO-CHECK BY DHIRU
  //var rest = JSON.parse(results);
  //  console.log(typeof results);
  //console.log(JSON.stringify(results[0]));
  // console.log(JSON.stringify(results[0]).restaurant);
  // console.log(rest[0].restaurant.price_range);
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal={true}
        data={results}
        keyExtractor={result => result.restaurant.id}
        renderItem={({ item }) => {
          return <ResultsDetail result={item.restaurant} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold"
  }
});

export default ResultsList;
