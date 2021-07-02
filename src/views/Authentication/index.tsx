import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Onboarding, { assets as authAssets } from './Onboarding';
import { Routes } from '../../Navigation';
import Welcome from './Welcome';
import Login from './Login';



const AuthStack = createStackNavigator<Routes>();
export const AuthenticationNavigator = () => {
  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name="Onboarding" component={Onboarding} />
      <AuthStack.Screen name="Welcome" component={Welcome} />
      <AuthStack.Screen name="Login" component={Login} />
    </AuthStack.Navigator>
  );
}

export const assets = [...authAssets];