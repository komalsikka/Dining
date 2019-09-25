import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={{ uri: result.thumb }} />
      <Text style={styles.nameStyle}>{result.name}</Text>
      <Text>
        {result.user_rating.aggregate_rating} Stars, {result.all_reviews_count}{" "}
        Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginLeft: 10
  },
  imageStyle: {
    width: 250,
    height: 100,
    borderRadius: 5
  },
  nameStyle: {
    fontWeight: "bold",
    fontSize: 14
  }
});

export default ResultsDetail;
