import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTabs from './screens/HomeTabs';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='HomeTabs'>
        <Stack.Screen name='HomeTabs' component={HomeTabs} options={{ title: 'Renta de carros' }} />
        <Stack.Screen name='Register' component={RegisterScreen} options={{ title: 'Registro Usuarios' }} />
        <Stack.Screen name='Login' component={LoginScreen} options={{ title: 'Inicio de sesión' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
