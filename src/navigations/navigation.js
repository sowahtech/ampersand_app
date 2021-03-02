import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import WelcomeScreen1 from '../screens/WelcomeScreen1';
import WelcomeScreen2 from '../screens/WelcomeScreen2';
import Scanner from '../screens/Scanner'
import MemberProfile from '../screens/MemberProfile'
import UserProfile from '../screens/UserProfile'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack'
import AddConnection from '../screens/AddConnection'
import { AntDesign } from '@expo/vector-icons';
import { connect } from 'react-redux'
import {logout} from '../redux/actions/authActions'


const Stack = createStackNavigator()

function AppContainer({ auth, logout }) {
	return (
		<NavigationContainer>

			{
				auth.login ?
					<Stack.Navigator>
						<Stack.Screen
							options={({ navigation }) => ({
								headerRight: () => (<View>
									<TouchableOpacity onPress={() => { navigation.navigate("User") }}><AntDesign style={{ marginRight: 20 }} name="user" size={24} color="white" /></TouchableOpacity>
								</View>),
								title: <View style={{ width: 100, height: 50 }}><Image source={require('../../assets/images/logo_white1_03.gif')} /></View>,
								headerLeft: null,
								headerStyle: {
									backgroundColor: "#ff2b4c",
									height: 100
								},
								headerTintColor: "white",
								headerTitleAlign: "center",
							})}
							name="Add"
							component={AddConnection} />
						<Stack.Screen
							options={{
								title: null,
								headerShown: false,
								headerStyle: {
									height: 0
								}
							}}
							name="Scanner"
							component={Scanner} />
						<Stack.Screen
							options={{
								title: "Member Profile",
								headerStyle: {
									backgroundColor: "#E71C63",
									height: 100
								},
								headerTintColor: "white",
								headerTitleAlign: "center",
							}}
							name="Member"
							component={MemberProfile}
						/>
						<Stack.Screen
							options={{
								headerRight: () => (<View>
									<TouchableOpacity onPress={() => { logout()}}><Text style={{ marginRight: 20, color: 'white', fontSize: 18 }}>Logout</Text></TouchableOpacity>
								</View>),
								title: "My Profile",
								headerStyle: {
									backgroundColor: "#E71C63",
									height: 100
								},
								headerTintColor: "white",
								headerTitleAlign: "center",
							}}
							name="User"
							component={UserProfile}
						/>

					</Stack.Navigator>
					:
					<Stack.Navigator>
						<Stack.Screen
							options={{
								title: '',
								headerStyle: {
									height: 0
								}
							}}
							name="LandingPage"
							component={WelcomeScreen1}
						/>
						<Stack.Screen
							options={{
								title: '',
								headerShown: false,
								headerStyle: {
									height: 0
								}
							}}
							name="RegisterLogin"
							component={WelcomeScreen2} />
						<Stack.Screen
							options={{
								title: "Sign In",
								headerStyle: {
									backgroundColor: "#E71C63",
									height: 100
								},
								headerTintColor: "white",
								headerTitleAlign: "center",
							}}
							name="Login"
							component={LoginScreen}
						/>
						<Stack.Screen
							options={{
								title: "Register",
								headerStyle: {
									backgroundColor: "#E71C63",
									height: 100
								},
								headerTintColor: "white",
								headerTitleAlign: "center",
							}}
							name="Register"
							component={RegisterScreen} 
						/>

					</Stack.Navigator>

			}



		</NavigationContainer>

	);
}

mapStateToProp = (state) => {
	return { auth: state }
}

export default connect(mapStateToProp, {logout})(AppContainer);


