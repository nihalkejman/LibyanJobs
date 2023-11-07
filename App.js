import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './SplashScreen'; //  SplashScreen 
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import Job from './Job';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ title: 'SplashScreen' }} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="Job" component={Job} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
//cd "C:\Users\nihal\OneDrive - Northumbria University - Production Azure AD\Documents\Year 3\final year project\libyanJobs\LibyanJobsProject"

