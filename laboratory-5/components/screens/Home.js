import React, { useState } from "react";
import {TouchableOpacity, View, StyleSheet, Text, FlatList} from "react-native";

const Home = ({ navigation }) => {

const [ product, setProduct ] = useState ([

{ title: 'Xbox', 
  description: 'The Xbox is a home video game console and the first installment in the Xbox series of video game consoles manufactured by Microsoft.', 
  rating: "9", 
  key: '1'},
{ title: 'PS5', 
  description: 'The PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment.', 
  rating: "10",
 key: '2'},
{ title: 'Nintendo Switch', 
  description: 'The Nintendo Switch[h] is a video game console developed by Nintendo and released worldwide in most regions on March 3, 2017.', 
  rating: "7",
 key: '3'}
]);

return (
  <View style ={ styles.container }>
  <FlatList data={product}
  renderItem={({item}) => (
    <TouchableOpacity style={styles.productButton} onPress={() => navigation.navigate           ('Product', item)}>
    <Text>
    { item.title }
    </Text>
    </TouchableOpacity> )}/>
  </View>
);
};

export default Home;

const styles = StyleSheet.create ({
 container: {
    flex: 6,
    padding: 20,
    backgroundColor: 'white'
  },
  productButton: {
    borderWidth: 5,
    padding: 9,
   
  },
  
});

