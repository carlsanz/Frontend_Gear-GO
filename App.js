import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font"
import { Montserrat_100Thin, Montserrat_400Regular, Montserrat_300Light } from '@expo-google-fonts/montserrat';
import { BebasNeue_400Regular  } from "@expo-google-fonts/bebas-neue";
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
import Pagos from './Screens/Pagos';
import MetodoPago from './Screens/MetodoPago';
import Tarjeta from './Screens/Tarjeta';
import NuevaHerramienta from './Screens/NuevaHerramienta';
import DetalleHerramienta from "./Screens/DetalleHerramienta";
import Admin from './Screens/Admin';
import ToolsApproval from './Screens/ToolsApproval';
import ToolsDetails from './Screens/ToolsDetails';
import UserApproval from './Screens/UserApproval';
import UserDetails from './Screens/UserDetails';

const Stack = createStackNavigator();

// Mantener la pantalla de carga hasta que las fuentes se carguen
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    BebasNeue_400Regular,
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
        <Stack.Screen name="LandingPage" component={DetalleHerramienta} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ToolBoxAgg" component={ToolBoxAgg} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="RegistroD" component={RegistroD} />
        <Stack.Screen name="RegistroId" component={RegistroId} />
        <Stack.Screen name="Bienvenido" component={Bienvenido} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Categoria" component={Categoria} />
        <Stack.Screen name="Rentadas" component={Rentadas} />
        <Stack.Screen name="Pagos" component={Pagos} />
        <Stack.Screen name="MetodoPago" component={MetodoPago} />
        <Stack.Screen name="Tarjeta" component={Tarjeta} />
        <Stack.Screen name="NuevaHerramienta" component={NuevaHerramienta}/>
        <Stack.Screen name="DetalleHerramienta" component={LandingPage} />
        <Stack.Screen name="Admin" component={Admin} />
        <Stack.Screen name="ToolsApproval" component={ToolsApproval} />
        <Stack.Screen name="ToolsDetails" component={ToolsDetails} />
        <Stack.Screen name="UserApproval" component={UserApproval} />
        <Stack.Screen name="UserDetails" component={UserDetails} />
      </Stack.Navigator>
    </NavigationContainer>
    </MessageProvider>
  );
}
