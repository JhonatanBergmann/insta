import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Icon from 'react-native-vector-icons/FontAwesome' 

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
            name='Profile'
            component={Profile}
            options={{ headerShown: false }}
            />
            <Stack.Screen 
            name='Login'
            component={Login}
            options={{ headerShown: false }}
            />
             <Stack.Screen 
            name='Register'
            component={Register}
            options={{ title: 'Registrar', }}
            />
        </Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator()
export default function MenuRoutes() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name='Feed'
                    component={Feed}
                    options={{
                    tabBarLabel: 'Feed',
                    tabBarIcon: ({ }) => (
                        <Icon name="home" color={'#000'} size={30} />
                    ),
                    tabBarBadge: 3,
                }}
                />
                <Tab.Screen
                    name='AddPhoto'
                    component={AddPhoto}
                    options={{
                    tabBarLabel: 'Add Picture',
                    tabBarIcon: ({ }) => (
                        <Icon name="camera" color={'#000'} size={30} />
                    ),
                }}
                />
                <Tab.Screen
                    name='Profile'
                    component={loginOrProfileRouter}
                    options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ }) => (
                        <Icon name="user" color={'#000'} size={30} />
                    ),
                }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
  }
