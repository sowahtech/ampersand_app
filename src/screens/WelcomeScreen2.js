import React from 'react'
import { Image, Text, View, TouchableOpacity, StyleSheet } from 'react-native'

export default function WelcomeScreen2({navigation}) {
    return (
        <View>
            <View>
                <Image style={{ height: 500, marginTop: -100 }} source={require('../../assets/back_03.gif')} />
            </View>
            <View style={{justifyContent: "center", marginHorizontal: 20}}>
                <Text style={{fontWeight: "bold", fontSize: 18, marginTop: -170}} >KEEP IN TOUCH WITH THE PEOPLE OF AMPERSAND</Text>
                <Text style={{marginTop: 15, marginLeft: 5, color: "gray", fontSize: 15, marginBottom: -300}}>Sign in or register with your Ampersand email</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginTop: 300
        }}>
                <View>
                    <TouchableOpacity onPress={()=>{navigation.navigate('Register')}}>
                        <Text style={{fontWeight: "bold"}}>REGISTER</Text>
                        <View style={{ height: 2, width: 66, backgroundColor: "orange" }}></View>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={()=>{navigation.navigate('Login')}}>
                        <Text style={{fontWeight: "bold"}}>SIGN IN</Text>
                        <View style={{ height: 2, width: 52, backgroundColor: "orange" }}></View>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}
