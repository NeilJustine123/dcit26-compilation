// Neil Justine C. Baldomar
// Mark Kervy A. Creencia
// Reshly D. Guaves
import React, {Component} from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  } from 'react-native';

export default class App extends Component {
  render(){
  return (
    <View style={styles.container}>
    <Text style={{
      fontSize:30,
      color:'white',
      fontStyle:'italic',
      fontWeight:'bold'}}>HELLO WORLD!</Text>
    </View>
  );
 }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'black',
  }



})
