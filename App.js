import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ExploreScreen from "./screens/ExploreScreen";
import SettingScreen from "./screens/SettingScreen";
import SubscribeScreen from "./screens/SubscribeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Explore" component={ExploreScreen} />
          <Stack.Screen name="Setting" component={SettingScreen} />
          <Stack.Screen name="Subscribe" component={SubscribeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}
