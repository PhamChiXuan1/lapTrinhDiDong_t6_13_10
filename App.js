import { StyleSheet, Text, View } from "react-native";
import { ManHinh1 } from "./View/manHinh1";
import { ManHinh2 } from "./View/manHinh2";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App(){
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen component={ManHinh1} name="manHinh1"></Stack.Screen>
                <Stack.Screen component={ManHinh2} name="manHinh2"></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});