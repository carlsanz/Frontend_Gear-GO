import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts, Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";


import { MessageProvider } from './Screens/MessageProvider';
import Login from "./Screens/Login";
import ToolBoxAgg from "./Screens/ToolBoxAgg";
import LandingPage from './Screens/LandingPage';
import Registro  from './Screens/Registro';
import RegistroD from './Screens/RegistroD';
import RegistroId from './Screens/RegistroId';
import Categoria from "./Screens/Categoria";
import Rentadas from "./Screens/Rentadas";
import Bienvenido from './Screens/Bienvenido';
import Home from './Screens/Home';

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
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="RegistroD" component={RegistroD} />
        <Stack.Screen name="RegistroId" component={RegistroId} />
        <Stack.Screen name="Bienvenido" component={Bienvenido} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Categoria" component={Categoria} />
        <Stack.Screen name="Rentadas" component={Rentadas} />
      </Stack.Navigator>
    </NavigationContainer>
    </MessageProvider>
  );
}
