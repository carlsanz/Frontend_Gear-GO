import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts, Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";


import { MessageProvider } from './Screens/MessageProvider';
import LandingPage from "./Screens/LandingPage";
import Login from "./Screens/Login";
import ToolBoxAgg from "./Screens/ToolBoxAgg";

const Stack = createStackNavigator();

// Mantener la pantalla de carga hasta que las fuentes se carguen
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat: Montserrat_400Regular,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync(); // Ocultar la pantalla de carga cuando las fuentes estén listas
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // Mientras las fuentes se cargan, no renderiza nada
  }

  return (
    <MessageProvider>
    <NavigationContainer onReady={onLayoutRootView}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ToolBoxAgg" component={ToolBoxAgg} />
      </Stack.Navigator>
    </NavigationContainer>
    </MessageProvider>
  );
}
