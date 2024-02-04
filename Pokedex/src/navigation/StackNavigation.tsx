import { createStackNavigator } from "@react-navigation/stack";
import { PokedexScreen } from "@/screens/PokedexScreen";
import { useStyles } from "react-native-unistyles";
import { HomeScreen } from "@/screens/HomeScreen";

type RootStackParamList = {
    HomeScreen: undefined;
    PokemonScreen: undefined;
}

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigation = () => {
    const { theme } = useStyles();

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: theme.colors.background,
                }
            }}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="PokemonScreen" component={PokedexScreen} />
        </Stack.Navigator>
    )
}
