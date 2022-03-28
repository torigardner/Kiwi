import React from "react";
import { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./home";
import CageCamScreen from "../screens/CageCamScreen";
import { NavigationContainer } from "@react-navigation/native";

export default function NavigationPane() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="CageCam" component={CageCamScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
