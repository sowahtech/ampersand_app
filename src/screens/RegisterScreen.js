import React, { Component } from 'react'
import { ScrollView, View, Text, TextInput, TouchableOpacity, } from 'react-native'
import ImagePicker from '../components/ImagePicker'
import { connect } from 'react-redux'
import { createEmailAccount, registerError } from '../redux/actions/authActions'


class RegisterScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            full_name: '',
            email: '',
            password: '',
            confirm: '',
            role: '',
            twitter: '',
            linkedIn: '',
        }
    }

    handleUpdateState = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    handleRegister = () => {
        if (this.state.password !== this.state.confirm) {
            this.props.registerError('passwords do not match')
            return;
        }
        this.props.createEmailAccount(this.state.email, this.state.password)
    }
    render() {
        const {auth}=this.props
        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={{ marginHorizontal: 8 }}>
                    <ImagePicker />
                </View>

                <View style={{ marginHorizontal: 15 }}>
                    <View >
                        {
                            auth.error.register &&
                            <Text style={{ color: 'red' }}>{auth.error.register}</Text>
                        }
                        <Text style={{ flex: 2, fontWeight: 'bold', marginBottom: -20, marginTop: 40 }}>Full Name</Text>
                        <TextInput
                            style={{ flex: 8 }}
                            value={this.state.full_name}
                            autoCapitalize='none'
                            autoCorrect={false}
                            textAlign='right'
                            onChangeText={(text) => { this.handleUpdateState('full_name', text) }}
                        />
                    </View>
                    <View style={{
                        height: 2,
                        width: '100%',
                        backgroundColor: '#EAE9EA',
                        marginBottom: 5
                    }}>

                    </View>
                    <View>
                        <Text style={{ flex: 2, fontWeight: 'bold', marginBottom: -20, marginTop: 20 }}>Email</Text>
                        <TextInput
                            style={{ flex: 8 }}
                            value={this.state.email}
                            autoCapitalize='none'
                            autoCorrect={false}
                            textAlign='right'
                            onChangeText={(text) => { this.handleUpdateState('email', text) }}
                        />
                    </View>
                    <View style={{
                        height: 2,
                        width: '100%',
                        backgroundColor: '#EAE9EA',
                        marginBottom: 5
                    }}>


                    </View>
                    <View>
                        <Text style={{ flex: 2, fontWeight: 'bold', marginBottom: -20, marginTop: 20 }}>Password</Text>
                        <TextInput
                            style={{ flex: 8 }}
                            value={this.state.password}
                            autoCapitalize='none'
                            autoCorrect={false}
                            textAlign='right'
                            secureTextEntry={true}
                            onChangeText={(text) => { this.handleUpdateState('password', text) }}
                        />
                    </View>
                    <View style={{
                        height: 2,
                        width: '100%',
                        backgroundColor: '#EAE9EA',
                        marginBottom: 5
                    }}>


                    </View>
                    <View>
                        <Text style={{ flex: 2, fontWeight: 'bold', marginBottom: -20, marginTop: 20 }}>Confirm Password</Text>
                        <TextInput
                            style={{ flex: 8 }}
                            value={this.state.confirm}
                            autoCapitalize='none'
                            autoCorrect={false}
                            textAlign='right'
                            secureTextEntry={true}
                            onChangeText={(text) => { this.handleUpdateState('confirm', text) }}
                        />
                    </View>
                    <View style={{
                        height: 2,
                        width: '100%',
                        backgroundColor: '#EAE9EA',
                        marginBottom: 5
                    }}>

                    </View>
                    <View>
                        <Text style={{ flex: 2, fontWeight: 'bold', marginBottom: -20, marginTop: 20 }}>Role</Text>
                        <TextInput
                            style={{ flex: 8 }}
                            value={this.state.role}
                            autoCapitalize='none'
                            autoCorrect={false}
                            textAlign='right'
                            onChangeText={(text) => { this.handleUpdateState('role', text) }}
                        />
                    </View>
                    <View style={{
                        height: 2,
                        width: '100%',
                        backgroundColor: '#EAE9EA',
                        marginBottom: 5
                    }}>

                    </View>
                    <View>
                        <Text style={{ flex: 2, fontWeight: 'bold', marginBottom: -20, marginTop: 20 }}>Twitter</Text>
                        <TextInput
                            style={{ flex: 8 }}
                            value={this.state.twitter}
                            autoCapitalize='none'
                            autoCorrect={false}
                            textAlign='right'
                            onChangeText={(text) => { this.handleUpdateState('twitter', text) }}
                        />
                    </View>
                    <View style={{
                        height: 2,
                        width: '100%',
                        backgroundColor: '#EAE9EA',
                        marginBottom: 5
                    }}>

                    </View>
                    <View>
                        <Text style={{ flex: 2, fontWeight: 'bold', marginBottom: -20, marginTop: 20 }}>LinkedIn</Text>
                        <TextInput
                            style={{ flex: 8 }}
                            value={this.state.linkedIn}
                            autoCapitalize='none'
                            autoCorrect={false}
                            textAlign='right'
                            onChangeText={(text) => { this.handleUpdateState('linkedIn', text) }}
                        />
                    </View>
                    <View style={{
                        height: 2,
                        width: '100%',
                        backgroundColor: '#EAE9EA',
                        marginBottom: 5
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
                    <TouchableOpacity
                        onPress={() => { this.handleRegister() }}>
                        <Text /* onPress = {()=>{this.props.navigation.navigate('Login')}} */ style={{ color: 'white', fontSize: 20 }}>REGISTER</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        )
    }
}

mapStateToProp = (state) =>{
    return{auth:state}
}

export default connect(mapStateToProp, { createEmailAccount, registerError })(RegisterScreen);