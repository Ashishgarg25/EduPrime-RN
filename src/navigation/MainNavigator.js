import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from '../screens/login/LoginScreen'
import Registration from '../screens/registration/Registration'
import OTP from '../screens/registration/OTP'
import Dashboard from '../screens/dashboard/Dashboard'
import Programs from '../screens/programs/Programs'
import ProgramDetails from '../screens/programs/ProgramDetails'
import Packages from '../screens/packages'
import PackageDetails from '../screens/packages/PackagesDetails'
import PackagePayment from "../screens/packages/packagePayment"
import ExamScreen from "../screens/examScreen";
import Splash from '../screens/login/Splash'

import { Image } from 'react-native'
import Profile from '../screens/profile/Profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
    return(
        <Tab.Navigator initialRouteName="Dashboard" tabBarOptions={{
            activeTintColor:"#F58095"
        }}>
            <Tab.Screen name="Home" component={Dashboard} options={{
                tabBarIcon: (color) => {
                    return(
                        <Image source={require('../utilities/assets/images/BottomTab/Group.png')} style={{color}} />
                    )
                }
            }} />
            <Tab.Screen name="Packages" component={Packages} options={{
                tabBarIcon: () => {
                    return(
                        <Image source={require('../utilities/assets/images/BottomTab/buy.png')} />
                    )
                }
            }} />
            <Tab.Screen name="Programs" component={Programs} options={{
                tabBarIcon: () => {
                    return(
                        <Image source={require('../utilities/assets/images/BottomTab/presentation.png')} />
                    )
                }
            }} />
            <Tab.Screen name="HomeWork" component={Programs} options={{
                tabBarIcon: () => {
                    return(
                        <Image source={require('../utilities/assets/images/BottomTab/clipboard.png')} />
                    )
                }
            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarIcon: () => {
                    return(
                        <Image source={require('../utilities/assets/images/BottomTab/Menu.png')} />
                    )
                }
            }} />
        </Tab.Navigator>
    )
}

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Registration" component={Registration} options={{headerShown:false}} />
            <Stack.Screen name="OTP" component={OTP} options={{headerShown: false}} />
            <Stack.Screen name="Dashboard" component={BottomTabNavigation} options={{headerShown: false}} />
            <Stack.Screen name="Programs" component={Programs} options={{headerShown: false}} />
            <Stack.Screen name="ProgramDetails" component={ProgramDetails} options={{headerShown: false}} />
            <Stack.Screen name="Packages" component={Packages} options={{headerShown: false}} />
            <Stack.Screen name="PackageDetails" component={PackageDetails} options={{headerShown: false}} />
            <Stack.Screen name="PackagePayment" component={PackagePayment} options={{headerShown: false}} />
            <Stack.Screen name="ExamScreen" component={ExamScreen} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );

}

export default MainNavigator;