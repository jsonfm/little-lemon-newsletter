import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Stack} from './src/navigation/stack';
import {SubscribeScreen} from './src/screens/Subscribe';
import {WelcomeScreen} from './src/screens/Welcome';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Subscribe" component={SubscribeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
