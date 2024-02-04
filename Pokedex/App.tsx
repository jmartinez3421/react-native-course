import 'react-native-gesture-handler';

import { StackNavigation } from "@/navigation/StackNavigation";
import { NavigationContainer } from "@react-navigation/native";

import "@/unistyles/unistyles";

const App = () => (
    <NavigationContainer>
        <StackNavigation />
    </NavigationContainer>
);

export default App;
