import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Splash from '../screens/Splash';
import Share from '../screens/Share';
import Signin from '../screens/Signin';
import Signup from '../screens/Signup';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Share" component={Share} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
