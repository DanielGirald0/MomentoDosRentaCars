import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons'
import UserScreen from './UserScreen';
import RentScreen from './RentScreen';
import CarScreen from './CarScreen';

const Tab = createBottomTabNavigator();
export default function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName='Login'
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'blck',
        tabBarInactiveTintColor: 'black',
        tabBarActiveBackgroundColor: 'gray'
      }}>
      <Tab.Screen name="User" component={UserScreen} options={{
        tabBarStyle: { display: 'none' },
        tabBarIcon: () => (<MaterialIcons name='home' size={30} />)
      }} />
      <Tab.Screen name="Car" component={CarScreen} options={{
        tabBarIcon: () => (<MaterialIcons name='phone' size={30} />)
      }} />
      <Tab.Screen name="Rent" component={RentScreen} options={{
        tabBarIcon: () => (<MaterialIcons name='home' size={30} />)
      }} />
    </Tab.Navigator>
  );
}