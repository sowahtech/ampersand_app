import React from 'react'
import { View, Image, Text } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

export default function MemberProfile() {
    return (
        <View style={{flex: 1, marginHorizontal: 20, marginTop: 50}}>
            <View style={{ flexDirection: 'row' }}>
                <View>
                    <Image style={{ width: 80, height: 80, borderRadius: 40, marginLeft: -5 }} source={require('../../assets/profile2.jpg')} />
                </View>
                <View style={{ marginVertical: 20, marginLeft: 10 }}>
                    <Text style={{ fontWeight: 'bold' }}>Joan Shay</Text>
                    <Text style={{ color: 'gray' }}>Head of Marketing</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', marginVertical: 30}}>
                <Entypo name="twitter-with-circle" size={40} color="gray" />
                <Entypo style={{marginLeft: 20}} name="linkedin-with-circle" size={40} color="gray" />
            </View>
            <View>
                <View style={{flexDirection: 'row', marginBottom: 30}}>
                    <Feather name="phone" size={24} color="black" />
                    <Text style={{marginLeft: 20}}>+233 (245) 234 123</Text>
                </View>
                <View style={{flexDirection: 'row', marginBottom: 30}}>
                    <MaterialIcons name="mail-outline" size={24} color="black" />
                    <Text style={{marginLeft: 20}}>larry@ampersandllc.co</Text>
                </View>
                <View style={{flexDirection: 'row', marginBottom: 30}}>
                    <EvilIcons name="location" size={24} color="black" />
                    <Text style={{marginLeft: 20}}>Shoreditch, UK</Text>
                </View>
            </View>
        </View>
    )
}
