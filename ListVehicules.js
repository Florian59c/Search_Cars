import React, { useState } from 'react'
import { FlatList, ScrollView, StatusBar, StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native'
import cars from './cars'

const ListVehicules = (props) => {

    const renderListVehicules = (item) => {
        return (
            <TouchableOpacity
                //   style={styles.coffeeItem}
                onPress={() => props.navigation.navigate("DetailVehicule", { item })} style={styles.fleximgText}
            >
                <View>
                    <Image source={{ uri: item.image }} style={styles.img} />
                </View>
                <View>
                    <Text>{item.name}</Text>
                    <Text>{item.price}€ par jour</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={item => item.id}
                // dans data on met le nom du fichier de l'api
                data={cars}
                renderItem={({ item }) => renderListVehicules(item)}
            //   numColumns={2}
            />
        </View>
    )
}

export default ListVehicules

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        padding: 10
    },
    img: {
        width: 150,
        height: 90
    },
    fleximgText: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5,
        padding: 5,
        backgroundColor: '#DFDFDF',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        overflow: 'hidden',
    }
})