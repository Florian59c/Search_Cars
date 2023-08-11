import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Dimensions, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import cars from './cars';

export default function Home(props) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <TouchableOpacity onPress={() => props.navigation.navigate("ListVehicules", { cars })}>
        <ScrollView>
          <ImageBackground style={styles.imageFond} source={require("./img/hero.jpg")} resizeMode="cover" >
            <Text style={styles.textHeader}>8 véhicules à découvrir</Text>
          </ImageBackground>
        </ScrollView>
      </TouchableOpacity>
    </View>
  );
}

// on definit des variables qui ont la largeur et hauteur de l'ecran
const vw = Dimensions.get("screen").width;
const vh = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  imageFond: {
    width: vw - 20,
    height: vh / 4,
    padding: 10,
    justifyContent: "flex-end",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    overflow: 'hidden',
  },
  textHeader: {
    color: "white",
    fontWeight: "bold",
  }
});
