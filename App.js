import * as React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import AppRoutes from "./src/App/application";

export default function App() {
  return (
    <PaperProvider>
      <AppRoutes />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  video: {
    marginTop: 20,
    maxHeight: 200,
    width: 320,
    flex: 1
  }
});
