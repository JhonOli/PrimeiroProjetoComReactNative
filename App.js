import React from "react";

import { View, Text, StyleSheet } from "react-native";
import Usuario1 from "./src/Usuario/Usuario";

const App = () => {
  const nome = "Jhon";
  const profissao = "Programador";
  return (
    <View style={styles.container}>
      <View style={styles.secondaryContainer}>
        <Text style={styles.text}>SEJA BEM VINDO!!</Text>
      </View>
      <Usuario1 nome={nome} profissao={profissao} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DCBDA6",
    alignItems: "center",
  },
  secondaryContainer: {
    marginTop: 50,
    backgroundColor: "#FBF0CC",
    padding: 18,
    width: "100%",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default App;
