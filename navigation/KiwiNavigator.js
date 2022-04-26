import React from "react";
import { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import CageCamScreen from "../screens/CageCamScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import LoginScreen from "../screens/LoginScreen";

export default function Navigator() {
  const Tab = createBottomTabNavigator();
  const loginTab = createNativeStackNavigator();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function viewChangeHandler() {
    setIsLoggedIn(!isLoggedIn);
  }

  if (isLoggedIn) {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          children={() => (
            <HomeScreen viewChangeHandler={viewChangeHandler}></HomeScreen>
          )}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="CageCam"
          component={CageCamScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="camera" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  } else {
    return (
      <loginTab.Navigator>
        <loginTab.Screen
          name=" "
          children={() => (
            <LoginScreen viewChangeHandler={viewChangeHandler}></LoginScreen>
          )}
        />
      </loginTab.Navigator>
    );
  }
}
