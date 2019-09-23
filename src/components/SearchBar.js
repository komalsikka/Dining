import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" size={30} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        style={styles.inputStyle}
        value={term}
        onChangeText={newTerm => onTermChange(newTerm)}
        onEndEditing={() => onTermSubmit()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    height: 50,
    backgroundColor: "#F0EEEE",
    marginHorizontal: 15,
    flexDirection: "row",
    borderRadius: 5
  },
  inputStyle: {
    flex: 1
  }
});

export default SearchBar;
