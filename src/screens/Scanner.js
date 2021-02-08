import React from 'react'
import {Stylesheet, View, Image, Text, TextInput, TouchableOpacity } from 'react-native'
import Scan from '../components/Scan'

export default function Scanner({navigation}) {
    return (
        <View style={{ flex: 1 }}>
            <Scan />
            <View style = {{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 50 }}>
                <Text style={{fontWeight: 'bold'}}>Want to share your contact?</Text>
                <View style={{
                    marginLeft: 10, 
                    width: 100, 
                    height: 30, 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    borderWidth: 2, 
                    borderColor: '#ff2b4c', 
                    borderRadius: 2}}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('Member')}}>
                        <Text style={{color: '#ff2b4c'}}>Send QR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
