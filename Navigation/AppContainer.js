import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer"
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';


// Splash screen // 
import splash from "../screens/splash";
import login from "../screens/auth/login"
import signup from "../screens/auth/signup"

// tab1 stack // 
import tab1 from "../screens/tab1/tab1";

// tab2 Stack // 
import tab2 from "../screens/tab2/tab2";

// tab3 Stack // 
import tab3 from "../screens/tab3/tab3";

// tab4 Stack // 
import tab4 from "../screens/tab4/tab4";


const Tab4StackNavigator = createStackNavigator();           // tab4 Stack 
export const Tab4Navigator = () => {
    return (
        <Tab4StackNavigator.Navigator initialRouteName="Tab4" screenOptions={{ headerShown: false }}>
            <Tab4StackNavigator.Screen name="Tab4" component={tab4} />
        </Tab4StackNavigator.Navigator>
    )
}



const Tab3StackNavigator = createStackNavigator();           // tab3 Stack 
export const Tab3Navigator = () => {
    return (
        <Tab3StackNavigator.Navigator initialRouteName="Tab3" screenOptions={{ headerShown: false }}>
            <Tab3StackNavigator.Screen name="Tab3" component={tab3} />
        </Tab3StackNavigator.Navigator>
    )
}


const Tab2StackNavigator = createStackNavigator();              // tab2 Stack 
export const Tab2Navigator = () => {
    return (
        <Tab2StackNavigator.Navigator initialRouteName="Tab2" screenOptions={{ headerShown: false }}>
            <Tab2StackNavigator.Screen name="Tab2" component={tab2} />
        </Tab2StackNavigator.Navigator>
    )
}



const Tab1StackNavigator = createStackNavigator();              // tab1 Stack 
export const Tab1Navigator = () => {
    return (
        <Tab1StackNavigator.Navigator initialRouteName="Tab1" screenOptions={{ headerShown: false }}>
            <Tab1StackNavigator.Screen name="Tab1" component={tab1} />
        </Tab1StackNavigator.Navigator>
    )
}




const TabStackNavigator = createBottomTabNavigator();           // Bottom Tab Navigator
export const TabNavigator = () => {
    return (
        <TabStackNavigator.Navigator initialRouteName="News"
            screenOptions={({ route }) => ({

                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'tab1') {
                        iconName = focused ? 'home' : 'home';
                    } else if (route.name === 'tab2') {
                        iconName = focused ? 'heart' : 'heart';
                    }
                    else if (route.name === 'tab3') {
                        iconName = focused ? 'clock-o' : 'clock-o';
                    }  else if (route.name === 'tab4') {
                        iconName = focused ? 'list' : 'list';
                    } 
                    // You can return any component that you like here!
                    return <Icon name={iconName} size={size} color={color} />;
                },
                headerShown: false,
                tabBarActiveTintColor: 'pink',                   // icon color when active
                tabBarInactiveTintColor: 'darkgrey',
                tabBarStyle: {
                    backgroundColor: 'white',
                    borderTopColor: 'transparent'
                }
            })}>
            <TabStackNavigator.Screen name="tab1" component={Tab1Navigator} />
            <TabStackNavigator.Screen name="tab2" component={Tab2Navigator} />
            <TabStackNavigator.Screen name="tab3" component={Tab3Navigator} />
            <TabStackNavigator.Screen name="tab4" component={Tab4Navigator} />
        </TabStackNavigator.Navigator>
    )
}


const IntroStack = createStackNavigator();
/* This is the main container for the application an should contain all other stacks for the application 
*/

export default AppContainer = (props) => {
    return (
        <NavigationContainer>
            <IntroStack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }} >
                <IntroStack.Screen name="Splash" component={splash} />
                <IntroStack.Screen name="Login" component={login} />
                <IntroStack.Screen name="Signup" component={signup} />

                <IntroStack.Screen name="Tabs" component={TabNavigator} />
            </IntroStack.Navigator>
        </NavigationContainer>
    );
};