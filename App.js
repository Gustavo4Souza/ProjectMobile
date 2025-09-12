import React from "react";
import { Image, View, Text } from "react-native";

import logo from "./src/assets/logo.png";

function app() {
  return (
    <View>
      <Image source={logo} />
      <Text>TEST</Text>
      <Text>IETSDANDJ</Text>
    </View>
  );
}

export default app;
