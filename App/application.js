// import React from "react";
// import Home from "./views/Home";
// export default function Application() {
//   return <Home />;
// }

import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import Home from "./views/Home";
import News from "./views/News";

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/* <Home /> */}
        <Stack.Navigator initialRouteName="Home"  screenOptions={{title: 'NextgenApp'}} >
          <Stack.Screen name="App" component={Home} />
          <Stack.Screen name="News" component={News} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
