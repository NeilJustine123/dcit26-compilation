import React from "react";
import { View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from '../screens/Home';
import Product from '../screens/Product';
const Stack = createStackNavigator();

const HomeStack = () => {
return(
  <View style = {styles.container}>
  <Stack.Navigator>
  <Stack.Screen name = "Home" component={Home} />
  <Stack.Screen name = "Product" component={Product} />
  </Stack.Navigator>
  </View>
);
};

export default HomeStack;
const styles = StyleSheet.create ({
 container: {
    flex: 1,
    padding: 3,
    backgroundColor: 'black',
  }
});








