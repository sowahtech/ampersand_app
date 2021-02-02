import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import WelcomeScreen1 from './src/screens/WelcomeScreen1';
import WelcomeScreen2 from './src/screens/WelcomeScreen2';
import ImagePicker from './src/components/ImagePicker';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack'

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
					headerStyle: {
						height: 0
					}
				}}
				name="RegisterLogin" 
				component={WelcomeScreen2} />
				<Stack.Screen 
					options = {{
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
					 options = {{
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
			</Stack.Navigator>

		</NavigationContainer>
	);
}


