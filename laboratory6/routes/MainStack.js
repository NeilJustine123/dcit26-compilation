





import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeStack from './HomeStack';
import AboutStack from './AboutStack';

const Drawer = createDrawerNavigator();

const MainNav = () => {
    
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="HOME" component={ HomeStack } />
                <Drawer.Screen name="ABOUT" component={ AboutStack } />
            </Drawer.Navigator>
        </NavigationContainer>  
    );
}

export default MainNav;

