import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoadAssets from './src/components/LoadAssets';

// views
import { Onboarding } from './src/views/Authentication/Onboarding';

const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
};

const Stack = createStackNavigator();

const AuthenticationNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Onboarding" component={Onboarding} />
    </Stack.Navigator>
  );
}


export default function App() {
  return (
    <LoadAssets { ...{ fonts } }>
      <AuthenticationNavigator />
    </LoadAssets>
  );
}