import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

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
                headerTintColor: '#111111',
                headerTitleAlign: 'center',
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
                tabBarOptions= {{
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
                    tabBarIcon: ({ }) => (
                        <Image
                        style={styles.bottomTabIcon}
                        source={require('../assets/imgs/Feed.png')                  
                        }/>
                    ),
                    tabBarLabel:() => {return null}
                }}
                />
                <Tab.Screen
                    name='AddPhoto'
                    component={AddPhoto}
                    options={{
                    tabBarLabel: 'Add Picture',
                    tabBarIcon: ({ }) => (
                        <Image
                        style={styles.bottomTabIcon}
                        source={require('../assets/imgs/AddPhoto.png')                  
                        }/>
                    ),
                    tabBarLabel:() => {return null}
                }}
                />
                <Tab.Screen
                    name='Profile'
                    component={loginOrProfileRouter}
                    options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ }) => (
                        <Image
                        style={styles.bottomTabIcon}
                        source={require('../assets/imgs/Profile.png')                  
                        }/>
                    ),
                    tabBarLabel:() => {return null}
                }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
  }

  const styles = StyleSheet.create({
    bottomTabIcon: {
        width: 25,
        height: 25, 
        resizeMode: 'contain'
    }
  })