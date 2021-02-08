import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import WelcomeScreen1 from './src/screens/WelcomeScreen1';
import WelcomeScreen2 from './src/screens/WelcomeScreen2';
import Scanner from './src/screens/Scanner'
import MemberProfile from './src/screens/MemberProfile'
import UserProfile from './src/screens/UserProfile'
import ImagePicker from './src/components/ImagePicker';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack'
import AddConnection from './src/screens/AddConnection'
import { AntDesign } from '@expo/vector-icons';

const Stack = createStackNavigator()

export default function App() {
	return (
		<NavigationContainer>

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
					component={RegisterScreen} />
				<Stack.Screen
					options={{
						headerRight: () => (<AntDesign style={{ marginRight: 20 }} name="user" size={24} color="white" />),
						title: <View style={{ width: 100, height: 50 }}><Image source={require('./assets/logo_white1_03.gif')} /></View>,
						headerLeft: null,
						headerStyle: {
							backgroundColor: "#ff2b4c",
							height: 100
						},
						headerTintColor: "white",
						headerTitleAlign: "center",
					}}
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

		</NavigationContainer>
	);
}


