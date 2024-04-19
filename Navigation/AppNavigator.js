import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "../Screens/WelcomeScreen";
import ItemsScreen from "../Screens/ItemsScreen";
import AddItemScreen from "../Screens/AddItemScreen";

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>

			
				<Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
			    <Stack.Screen name="ItemsScreen" component={ItemsScreen}/>
				<Stack.Screen name="AddItemScreen" component={AddItemScreen}/>
				
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppNavigator;

const styles = StyleSheet.create({});
