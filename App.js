import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Import screens
import HomeScreen from './screens/HomeScreen';
import MortgageScreen from './screens/MortgageScreen';
import SIPScreen from './screens/SIPScreen';
import CarLoanScreen from './screens/CarLoanScreen';
import ShippingScreen from './screens/ShippingScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch (route.name) {
              case 'Home':
                iconName = 'home';
                break;
              case 'Mortgage':
                iconName = 'house';
                break;
              case 'SIP':
                iconName = 'trending-up';
                break;
              case 'Car Loan':
                iconName = 'directions-car';
                break;
              case 'Shipping':
                iconName = 'local-shipping';
                break;
              default:
                iconName = 'circle';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#005a9c',
          tabBarInactiveTintColor: 'gray',
          headerStyle: {
            backgroundColor: '#005a9c',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Mortgage" component={MortgageScreen} />
        <Tab.Screen name="SIP" component={SIPScreen} />
        <Tab.Screen name="Car Loan" component={CarLoanScreen} />
        <Tab.Screen name="Shipping" component={ShippingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
