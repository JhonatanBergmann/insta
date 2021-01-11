import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Ionicons from 'react-native-vector-icons/Ionicons'

import StatusBar from './components/StatusBar'

import Feed from './screens/Feed'
import AddPhoto from './screens/AddPhoto'
import Profile from './screens/Profile'
import Login from './screens/Login'
import Register from './screens/Register'

const Stack = createStackNavigator()
function loginOrProfileRouter() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Login'
        component={Login}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='Profile'
        component={Profile}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='Register'
        component={Register}
        options={{
          title: 'Registrar',
          headerShown: true,
          headerTintColor: '#B3B3B3',
          headerTitleAlign: 'center',
          headerTitleStyle: { fontSize: hp('2.5%') },
          headerStyle: { backgroundColor: '#FAFAFA' }
        }}
      />
    </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator()
export default function MenuRoutes() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName

            if (route.name === 'Feed') {
              iconName = focused
                ? 'home-sharp'
                : 'home-outline'
            } else if (route.name === 'AddPhoto') {
              iconName = focused
                ? 'camera'
                : 'camera-outline'
            } else if (route.name === 'Profile') {
              iconName = focused
                ? 'person'
                : 'person-outline'
            }

            // You can return any component that you like here!
            return <Ionicons
              style={{ opacity: 0.3 }}
              name={iconName}
              size={hp('4%')}
              color={'#111111'}
            />
          },
        })}

        tabBarOptions={{
          style: {
            backgroundColor: '#FAFAFA',
            tabBarLabel: false
          }
        }}
      >
        <Tab.Screen
          name='Feed'
          component={Feed}
          options={{
            tabBarLabel: 'Feed',
            tabBarLabel: () => { return null }
          }}
        />
        <Tab.Screen
          name='AddPhoto'
          component={AddPhoto}
          options={{
            tabBarLabel: 'Add Picture',
            tabBarLabel: () => { return null }
          }}
        />
        <Tab.Screen
          name='Profile'
          component={loginOrProfileRouter}
          options={{
            tabBarLabel: 'Profile',
            tabBarLabel: () => { return null }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}