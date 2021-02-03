import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, TouchableOpacity, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';

export default function ImagePickerExample() {
    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    state={
        full_name: '',

    }

    return (
        <View style={{ 
            flex: 1, 
            alignItems: 'center', 
            justifyContent: 'center', 
            width: 340, 
            height: 180, 
            backgroundColor: '#EAE9EA', 
            marginHorinzontal: 10
            }}>

            <TouchableOpacity onPress={pickImage}>
                <AntDesign style={{paddingLeft: 40}}name="user" size={50} color='#E71C63' />
                <Text style={{ color: '#E71C63' }}>ADD PROFILE PHOTO</Text>
            </TouchableOpacity>
            {image && <Image source={{ uri: image }} style={{ width: 340, height: 245 }} />}
        </View>
    );
}