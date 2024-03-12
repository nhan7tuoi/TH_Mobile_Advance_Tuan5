
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Bai4 from './src/Bai4';
import Bai5 from './src/Bai5';
import Bai6 from './src/Bai6';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown: false
      }}>
        <Tab.Screen name="Bai4" component={Bai4} />
        <Tab.Screen name="Bai5" component={Bai5} />
        <Tab.Screen name="Bai6" component={Bai6} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

