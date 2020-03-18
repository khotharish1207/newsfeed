import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import WebView from "react-native-webview";


class News extends React.Component {
  render() {
    const {
      route: { params }
    } = this.props;
    const { uri } = params;
    console.log('----', uri)
    return (
      
       <WebView source={{ uri }} />
     
    );
  }
}

export default News;
