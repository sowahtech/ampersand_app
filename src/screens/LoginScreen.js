import React, { Component } from 'react'
import { Image, TextInput, TouchableOpacity, StyleSheet, Text, ScrollView, View } from 'react-native'

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    render() {
        return (
            <ScrollView>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        style={{ width: 360, height: 250 }}
                        source={require('../../assets/login_pix_03_1.png')} />
                </View>
                <View style={{ marginVertical: 80, marginHorizontal: 20 }}>
                    <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                        <Text style={{ flex: 2, fontWeight: 'bold' }}>Email</Text>
                        <TextInput
                            style={{ flex: 8 }}
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
                        backgroundColor: 'gray',
                        marginBottom: 10
                    }}>

                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ flex: 2, fontWeight: 'bold' }}>Password</Text>
                        <TextInput
                            value={this.state.password}
                            autoCapitalize='none'
                            style={{ flex: 8 }}
                            autoCorrect={false}
                            textAlign='right'
                            secureTextEntry={true}
                            onChangeText={(password) => { this.setState({ password }) }}
                        />
                    </View>


                    <View style={{
                        width: '100%',
                        height: 50,
                        borderRadius: 5,
                        backgroundColor: '#E71C63',
                        marginVertical: 40,
                        justifyContent: "center",
                        alignItems: 'center'
                    }}>
                        <TouchableOpacity>
                            <Text onPress={() => { this.props.navigation.navigate('Add') }} style={{ color: "white", fontSize: 20 }}>SIGN IN</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 30 }}>
                        <View>
                            <Text style={{ fontWeight: 'bold' }}>Forgot?</Text>
                        </View>
                        <View style={{ marginLeft: 8 }}>
                            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Register')}}>
                                <Text style={{ fontWeight: 'bold' }}>Reset Password</Text>
                                <View style={{ height: 2, width: 100, backgroundColor: "orange" }}></View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </ScrollView>
        )
    }
}

styles = StyleSheet.create({
    input: {
        fontSize: 20,
        height: 50,
    }
})