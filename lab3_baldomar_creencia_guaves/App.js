//BSCS 3-1
//BALDOMAR,NEIL JUSTINE
//CREENCIA,MARK KERVY
//GUAVES,RESHLY
import  React, {useState} from 'react';
import { View, Button, StyleSheet } from 'react-native';
import SampleModal from "./component/SampleModal";

export default function App(){
const  [isModalOpen, setIsModalOpen] =useState(false);

return (
  <View style={styles.container}>
    <Button title="Click Me!" onPress = {() => setIsModalOpen(true)}/>    
    <SampleModal visible = {isModalOpen} onClose = {() => setIsModalOpen(false)}/>
  </View>
);
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignment: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFDBAC'
  }
}
)