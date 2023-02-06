import {
  useFonts,
  Rubik_300Light,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_600SemiBold,
  Rubik_700Bold,
  Rubik_800ExtraBold,
  Rubik_900Black
} from '@expo-google-fonts/rubik';


import React, { useEffect, useState } from 'react';
import OnboardingScreen from './screens/OnboardingScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';

import WelcomeScreen from './screens/WelcomeScreen';
import AuthenticatedCode from './screens/AuthenticatedCode';
import BioScreen from './screens/BioScreen';
import ProfessionScreen from './screens/ProfessionScreen';
import BottomNav from './navigations/BottomNav';


export default function App() {

  const [onBoarding, setOnBoarding] = useState(false);

  //to check if user has onboard
  const checkOnboarding = async () => {
    const value = await AsyncStorage.getItem("searchTagOnboarding6")
    if (value !== null) {
      setOnBoarding(true)
    }
  }


  useEffect(() => {
    checkOnboarding();
  }, [])


  const Stack = createNativeStackNavigator();


  //font styles
  let [fontsLoaded] = useFonts({
    Rubik_300Light,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold,
    Rubik_800ExtraBold,
    Rubik_900Black
  });

  //if font is not loaded
  if (!fontsLoaded) { return null }


  if (!onBoarding) {
    return <OnboardingScreen setOnBoarding={setOnBoarding} />
  }


  //if not first time
  return (
    <NavigationContainer>
      <StatusBar style='auto' />
      <Stack.Navigator initialRouteName='Welcome' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Authenticate" component={AuthenticatedCode} />
        <Stack.Screen name="Biodata" component={BioScreen} />
        <Stack.Screen name="Professiondata" component={ProfessionScreen} />
        <Stack.Screen name="Bottom" component={BottomNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


