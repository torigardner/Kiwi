import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import colors from "../config/colors";
import NotificationCard from "../components/NotificationCard";
import ProfileCard from "../components/ProfileCard";
import WeatherIcon from "../components/WeatherIcon";
import MenuIcon from "../components/MenuIcon";
import WaterIcon from "../components/WaterIcon";
import CleanIcon from "../components/CleanIcon";
import CartIcon from "../components/CartIcon";

export default function HomeScreen(props) {
  function logOutHandler() {
    props.viewChangeHandler();
  }

  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            color: colors.primary,
            alignSelf: "flex-end",
            paddingRight: 10,
          }}
          onPress={logOutHandler}
        >
          Logout
        </Text>
        <ProfileCard
          userName="@Iluvbirds123"
          name="Mango Bird"
          image={require("../assets/profilePic.jpg")}
        ></ProfileCard>
      </View>
      <View style={styles.notificationsContainer}>
        <Text style={styles.text}>Action Required</Text>
        <NotificationCard
          title="Bring Birds Inside"
          time="Now"
          image={<WeatherIcon></WeatherIcon>}
        />
      </View>
      <ScrollView style={styles.notificationsContainer}>
        <Text style={styles.text}>Upcoming Alerts</Text>
        <NotificationCard
          title="Prepare Food"
          time="10:00 AM"
          image={<MenuIcon></MenuIcon>}
        ></NotificationCard>
        <NotificationCard
          title="Item Auto Purchase"
          time="4/27/22"
          image={<CartIcon></CartIcon>}
        ></NotificationCard>
        <NotificationCard
          title="Clean Cages"
          time="4/29/22"
          image={<CleanIcon></CleanIcon>}
        ></NotificationCard>
        <NotificationCard
          title="Change Water"
          time="5/01/22"
          image={<WaterIcon></WaterIcon>}
        ></NotificationCard>
        <NotificationCard
          title="Prepare Food"
          time="5/01/22"
          image={<MenuIcon></MenuIcon>}
        ></NotificationCard>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  logout: {
    flexDirection: "row-reverse",
  },
  notificationsContainer: {
    backgroundColor: colors.grey,
    margin: 10,
    borderRadius: 15,
    padding: 10,
  },
  text: {
    margin: 10,
  },
});
