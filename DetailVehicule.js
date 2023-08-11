import React, { useState } from 'react'
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native'

const DetailVehicule = (props) => {
    const [item, setItem] = useState(props.route.params.item);
    return (
        <View>
            <Image source={{ uri: item.image }} style={styles.img} />
            <View>
                <View style={styles.icon}>
                    <View style={styles.taille}>
                        <Image source={require("./img/icons/engine.png")} />
                        {item.options.transmission === "automatique" ? <Text>Automatique</Text> : <Text>Manuelle</Text>}
                    </View>
                    <View style={styles.taille}>
                        <Image source={require("./img/icons/doors.png")} />
                        <Text>{item.options.person} personnes</Text>
                    </View>
                </View>
                <View style={styles.icon}>
                    <View style={styles.taille}>
                        <Image source={require("./img/icons/compass.png")} />
                        {item.options.navigation ? <Text>GPS intégré</Text> : <Text>GPS non-intégré</Text>}
                    </View>
                    <View style={styles.taille}>
                        <Image source={require("./img/icons/snow.png")} />
                        {item.options.aircondition ? <Text>Véhicule climatisé</Text> : <Text>Véhicule non-climatisé</Text>}
                    </View>
                </View>
            </View>
            <Text style={styles.text}>{item.price}€ par jour</Text>
        </View>
    )
}

export default DetailVehicule

// on definit des variables qui ont la largeur et hauteur de l'ecran
const vw = Dimensions.get("screen").width;
const vh = Dimensions.get("screen").height;

const styles = StyleSheet.create({
    img: {
        width: vw,
        height: vh / 4,
    },
    icon: {
        flexDirection: 'row',
        width: vw,
        marginTop: 30,
    },
    taille: {
        width: vw / 2,
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        position: 'absolute',
        color: 'white',
        left: 0,
        right: 0,
        bottom: -vw / 1.5,
        backgroundColor: '#2d4f6c',
        padding: 20
    }
});