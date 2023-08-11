import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Image, StyleSheet, Text } from 'react-native';
import Home from './Home';
import ListVehicules from './ListVehicules'
import DetailVehicule from './DetailVehicule';
import cars from './cars';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#2d4f6c"
          },
          headerTintColor: "white"
        }}
      >
        <Stack.Screen name="Accueil" component={Home}
        // rajoute des options dans la barre
          options={{
            // met une image à la place du titre
            headerTitle: () => (
              <Image style={styles.img} source={require("./img/logo-transparent.png")} />
            ),
            //permet de centrer l'image dans la barre
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen name='ListVehicules' options={{ title: "Nos Véhicules", headerTitleAlign: 'center'}} component={ListVehicules} />
        <Stack.Screen name='DetailVehicule' options={{ title: "detail", headerTitleAlign: 'center'}} component={DetailVehicule} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  img: {
    width: 75,
    height: 75,
  }
});