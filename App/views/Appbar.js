import * as React from "react";
import { Appbar } from "react-native-paper";

export default class MyComponent extends React.Component {
  _goBack = () => console.log("Went back");

  _handleSearch = () => console.log("Searching");

  _handleMore = () => console.log("Shown more");

  render() {
    return (
      <Appbar.Header>
        <Appbar.BackAction onPress={this._goBack} />
        <Appbar.Content title="News" subtitle="Get updates" />
        <Appbar.Action icon="dots-vertical" onPress={this._handleMore} />
      </Appbar.Header>
    );
  }
}
