import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'


export default function WelcomeScreen1({navigation}) {
    return (
        <View style={styles.container}>
            <View style={{marginTop: 150, flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                <Image source={require('../../assets/amp_icon_01.png')} />
                <Text style={{marginTop: 18, fontSize: 25, fontWeight: "bold", marginLeft: -2, color: "#434343"}}>AMPERSAND</Text>
            </View>
            <View style={{justifyContent: "center", alignItems: "center", marginBottom: -300, marginTop: 150}}>
                <Text style={{color: "gray", fontSize: 25}}>AMPERSAND</Text>
                <Text style={{color: "gray", fontSize: 25}}>CONTACTS</Text>
            </View>
            <View style={{marginTop: 500, justifyContent: "center", alignItems:"center"}}>
                <TouchableOpacity onPress={()=>{navigation.navigate("RegisterLogin")}}>
                    <Text style={{color: "gray", fontSize: 20}}>GET STARTED</Text>
                    <View style={{height: 2, width: 127, backgroundColor: "orange"}}></View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        backgroundColor: "#EAEBDC",
        height: 770,
        width: 360
    }
})
