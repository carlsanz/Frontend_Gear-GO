import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingPage from './Screens/LandingPage';
import Login from './Screens/Login';
import Registro  from './Screens/Registro';
import RegistroD from './Screens/RegistroD';
import RegistroId from './Screens/RegistroId';
import Bienvenido from './Screens/Bienvenido';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="RegistroD" component={RegistroD} />
        <Stack.Screen name="RegistroId" component={RegistroId} />
        <Stack.Screen name="Bienvenido" component={Bienvenido} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}