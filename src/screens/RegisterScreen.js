import React, { Component } from 'react'
import { ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native'
import ImagePicker from '../components/ImagePicker'


export default class RegisterScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            full_name: '',
            email: '',
            phone_no: '',
            role: '',
            twitter: '',
            linkedIn: '',
        }
    }
    render() {
        return (
            <ScrollView>
                <View style={{marginHorizontal: 8}}>
                    <ImagePicker />
                </View>
                <View style={{marginHorizontal: 15}}>
                    <View >
                        <Text style={{flex: 2, fontWeight: 'bold', marginBottom: -20, marginTop: 40}}>Full Name</Text>
                        <TextInput
                            style={{flex: 8}}
                            value={this.state.full_name}
                            autoCapitalize='none'
                            autoCorrect={false}
                            textAlign='right'
                            onChangeText={(full_name) => { this.setState({ full_name }) }}
                        />
                    </View>
                    <View style={{
                        height: 2, 
                        width: '100%', 
                        backgroundColor: '#EAE9EA',
                        marginBottom: 10
                        }}>

                    </View>
                    <View>
                        <Text style={{flex: 2, fontWeight: 'bold', marginBottom: -20, marginTop: 20}}>Email</Text>
                        <TextInput
                            style={{flex: 8}}
                            value={this.state.email}
                            autoCapitalize='none'
                            autoCorrect={false}
                            textAlign='right'
                            onChangeText={(email) => { this.setState({ email }) }}
                        />
                    </View>
                    <View style={{
                        height: 2, 
                        width: '100%', 
                        backgroundColor: '#EAE9EA',
                        marginBottom: 10
                        }}>

                    </View>
                    <View>
                        <Text style={{flex: 2, fontWeight: 'bold', marginBottom: -20, marginTop: 20}}>Phone Number</Text>
                        <TextInput
                            style={{flex: 8}}
                            value={this.state.phone_no}
                            autoCapitalize='none'
                            autoCorrect={false}
                            textAlign='right'
                            onChangeText={(phone_no) => { this.setState({ phone_no }) }}
                        />
                    </View>
                    <View style={{
                        height: 2, 
                        width: '100%', 
                        backgroundColor: '#EAE9EA',
                        marginBottom: 10
                        }}>

                    </View>
                    <View>
                        <Text style={{flex: 2, fontWeight: 'bold', marginBottom: -20, marginTop: 20}}>Role</Text>
                        <TextInput
                            style={{flex: 8}}
                            value={this.state.role}
                            autoCapitalize='none'
                            autoCorrect={false}
                            textAlign='right'
                            onChangeText={(role) => { this.setState({ role }) }}
                        />
                    </View>
                    <View style={{
                        height: 2, 
                        width: '100%', 
                        backgroundColor: '#EAE9EA',
                        marginBottom: 10
                        }}>

                    </View>
                    <View>
                        <Text style={{flex: 2, fontWeight: 'bold', marginBottom: -20, marginTop: 20}}>Twitter</Text>
                        <TextInput
                            style={{flex: 8}}
                            value={this.state.twitter}
                            autoCapitalize='none'
                            autoCorrect={false}
                            textAlign='right'
                            onChangeText={(twitter) => { this.setState({ twitter }) }}
                        />
                    </View>
                    <View style={{
                        height: 2, 
                        width: '100%', 
                        backgroundColor: '#EAE9EA',
                        marginBottom: 10
                        }}>

                    </View>
                    <View>
                        <Text style={{flex: 2, fontWeight: 'bold', marginBottom: -20, marginTop: 20}}>LinkedIn</Text>
                        <TextInput
                            style={{flex: 8}}
                            value={this.state.linkedIn}
                            autoCapitalize='none'
                            autoCorrect={false}
                            textAlign='right'
                            onChangeText={(linkedIn) => { this.setState({ linkedIn }) }}
                        />
                    </View>
                    <View style={{
                        height: 2, 
                        width: '100%', 
                        backgroundColor: '#EAE9EA',
                        marginBottom: 10
                        }}>

                    </View>
                </View>
                <View style={{
                    width: 308, 
                    height: 50, 
                    backgroundColor: '#E71C63', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    marginHorizontal: 25,
                    marginTop: 10,
                    borderRadius: 5
                    }}>
                    <TouchableOpacity>
                        <Text onPress = {()=>{this.props.navigation.navigate('Login')}} style={{color: 'white', fontSize: 20}}>REGISTER</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        )
    }
}
