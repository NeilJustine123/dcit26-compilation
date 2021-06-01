import React from "react"; 
import { View, StyleSheet, Text } from "react-native";

const Product = ({ route, navigation }) => {
  return(
    <View >
        <Text> { route.params.title } </Text>
        <Text> { route.params.rating } </Text>
        <Text> { route.params.description } </Text>
    </View>
  );
}
export default Product;

