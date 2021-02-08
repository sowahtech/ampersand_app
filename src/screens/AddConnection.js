import React from 'react'
import { Text, Image, TouchableOpacity, View } from 'react-native'
import { QRCode } from 'react-native-custom-qr-codes-expo';

export default function AddConnection({navigation}) {
    return (
        <View style={{flex: 1, justifyContent: 'space-evenly'}}>
            <View style={{marginHorizontal: 30 }}>
                <Text style={{marginVertical: 10, fontWeight: 'bold'}}>Exchange Contact Information</Text>
                <Text style={{color: 'gray'}}>Scan this QR below to share your contacts</Text>
            </View>
            <View style={{marginHorizontal: 50}}>
                <QRCode codeStyle='square' />
            </View>
            <View style={{ flexDirection: 'row', marginHorizontal: 30}}>
                <View>
                    <Image style={{ width: 50, height: 50, borderRadius: 25 }} source={require('../../assets/profile2.jpg')} />
                </View>
                <View style={{justifyContent: 'space-around', marginLeft: 10}}>
                    <Text style={{fontWeight: 'bold'}}>Joan Shay</Text>
                    <Text style={{color: 'gray'}}>Head of Marketing</Text>
                </View>
            </View>
            <View style={{ height: 2, width: '100%', backgroundColor: 'gray', marginBottom: -50 }}></View>
            <View style={{ flexDirection: 'row', marginHorizontal: 30, justifyContent: 'center', alignItems: 'center',  marginBottom: -50 }}>
                <Text style={{fontWeight: 'bold'}}>Want to add a new connection?</Text>
                <View style={{
                    marginLeft: 10, 
                    width: 100, 
                    height: 30, 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    borderWidth: 2, 
                    borderColor: '#ff2b4c', 
                    borderRadius: 2}}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('Scanner')}}>
                        <Text style={{color: '#ff2b4c'}}>Scan QR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
