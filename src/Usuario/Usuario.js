import React from "react";

import { View, Text, StyleSheet } from "react-native";

const Usuario1 = (props) => {
  return (
    <View style={styles.contentView}>
      <Text
        style={[styles.text, { color: "#fff", fontSize: 25, marginLeft: 10 }]}
      >
        NOME: {props.nome}{" "}
      </Text>
      <Text
        style={[styles.text, { color: "#fff", fontSize: 25, marginLeft: 10 }]}
      >
        PROFISSÃO: {props.profissao}{" "}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  contentView: {
    width: "100%",
    backgroundColor: "#DA9488",
    alignItems: "start",
    justifyContent: "center",
    height: 300,
  },
});

export default Usuario1;
