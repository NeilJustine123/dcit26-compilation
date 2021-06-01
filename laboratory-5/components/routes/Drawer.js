import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import { createDrawerNavigator} from "@react-navigation/drawer"; 
import { Feather } from "@expo/vector-icons";


import HomeStack from './HomeStack';
import AboutStack from './AboutStack';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
      <NavigationContainer>
       <Drawer.Navigator>
        <Drawer.Screen 
        options={{
          drawerIcon:() => (
            <Feather name="home" size={20} color="black" />
          ),
        }}

        name="Home"
        component={HomeStack}
        />

       <Drawer.Screen 
        options={{
          drawerIcon:() => (
            <Feather name="about" size={20} color="black" />
          ),
        }}
        name="About"
        component={AboutStack}
        />
         
  </Drawer.Navigator>
  </NavigationContainer>

  );
}

export default DrawerNavigator;


