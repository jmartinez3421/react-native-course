import "react-native-gesture-handler";

import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "./src/navigation/StackNavigator";

export default function App() {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({});