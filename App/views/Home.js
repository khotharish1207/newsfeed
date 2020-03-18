import * as React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons";

import Appbar from "./Appbar";
import Card from "./Card";
import newsData from "../../data/newsDummy";

const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();

const NewsFeed = ({ stackNavigator }) => {
  return (
    <ScrollView>
      {newsData.map(news => (
        <Card key={news.publishedAt} {...news} navigation={stackNavigator} />
      ))}
    </ScrollView>
  );
};

const Facebookfeed = () => <Text>FaceBook</Text>;
const Tweeterfeed = () => <Text>FaceBook</Text>;

export default function Home({ navigation }) {
  return (
    <Tab.Navigator
      initialRouteName="NewsFeed"
      tabBarOptions={{
        activeBackgroundColor : "#A9D0F5"
      }}
    >
      <Tab.Screen
        name="NewsFeed"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          )
        }}
        component={() => <NewsFeed stackNavigator={navigation} />}
      />
      <Tab.Screen
        name="Facebook"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="facebook"
              color={"blue"}
              size={size}
            />
          )
        }}
        component={Facebookfeed}
      />
      <Tab.Screen
        name="Twitter"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="twitter"
              color={"#1da1f2"}
              size={size}
            />
          )
        }}
        component={Tweeterfeed}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {}
});
