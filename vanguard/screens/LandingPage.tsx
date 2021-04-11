import * as React from "react";
import { StyleSheet, Dimensions, Button } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default class LandingPage extends React.Component {
  state = { login: false };
  render() {
    return !this.state.login ? (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Vanguard</Text>
        <Button
          title="Log me in"
          onPress={() => this.setState({ login: true })}
        />
      </View>
    ) : (
      this.props.appNavigator
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EEF5DB",
  },
  title: {
    padding: 20,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#4F6367",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 1.15,
  },
});