import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";

import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <View style={style.header}>
      <image source={logo} style={style.image} />
      <text style={style.boasVindas}> Ola, Gustavo</text>
      <text style={style.legenda}> Encontre os melhores produtos</text>
    </View>
  );
}

const style = StyleSheet.create({
  header: {
    backgroundcolor: "#F10E0E",
    padding: 16,
    alingnItems: "center",
  },
  image: {
    with: 70,
    height: 28,
  },
  boasVindas: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "bolt",
    color: "#F10E0E",
  },
  legenda: {
    fontSize: 16,
    color: "#F10E0E",
  },
});

export default Header;