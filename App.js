import React from 'react';
import { Platform, Image, View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Import screens
import HomeScreen from './screens/HomeScreen';
import MortgageScreen from './screens/MortgageScreen';
import SIPScreen from './screens/SIPScreen';
import CarLoanScreen from './screens/CarLoanScreen';

const Tab = createBottomTabNavigator();

const HEADER_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const HeaderLeft = () => {
  const navigation = useNavigation();
  
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Image
        style={{
          height: HEADER_HEIGHT,
          width: HEADER_HEIGHT * 2,
          resizeMode: 'contain',
          marginLeft: 10,
          marginVertical: -8,
        }}
        source={require('./assets/logo.png')}
      />
    </TouchableOpacity>
  );
};

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
          headerLeft: () => <HeaderLeft />,
          headerTitleAlign: 'center',
          headerLeftContainerStyle: {
            paddingLeft: 0,
          },
        })}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            title: 'Home'
          }}
        />
        <Tab.Screen 
          name="Mortgage" 
          component={MortgageScreen}
          options={{
            title: 'Mortgage Calculator'
          }}
        />
        <Tab.Screen 
          name="SIP" 
          component={SIPScreen}
          options={{
            title: 'SIP Calculator'
          }}
        />
        <Tab.Screen 
          name="Car Loan" 
          component={CarLoanScreen}
          options={{
            title: 'Car Loan Calculator'
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
