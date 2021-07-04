import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Onboarding, { assets as authAssets } from './Onboarding';
import { Routes } from '../../Navigation';
import Welcome from './Welcome';
import Login from './Login';
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';



const AuthStack = createStackNavigator<Routes>();
export const AuthenticationNavigator = () => {
  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name="Onboarding" component={Onboarding} />
      <AuthStack.Screen name="Welcome" component={Welcome} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Signup" component={Signup} />
      <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
    </AuthStack.Navigator>
  );
}

export const assets = [...authAssets];