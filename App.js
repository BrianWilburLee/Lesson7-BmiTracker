import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import AddBMIScreen from "./screens/AddBMIScreen";
import EditBMIScreen from "./screens/EditBMIScreen";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Add BMI" component={AddBMIScreen} />
                <Stack.Screen name="Edit BMI" component={EditBMIScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
