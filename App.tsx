/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import AuthScreen from './screens/AuthScreen';
import UserScreen from './screens/UserScreen';

function App(): JSX.Element {
	const Stack = createNativeStackNavigator();
 
 return (
		<NavigationContainer>
      <Stack.Navigator
				initialRouteName='Authentication'>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
				<Stack.Screen
          name="Authentication"
          component={AuthScreen}
          options={{title: 'Login or Signup'}}
        />
				<Stack.Screen
          name="UserProfile"
          component={UserScreen}
          options={{title: ''}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
