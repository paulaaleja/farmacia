import { Button, StyleSheet, Text, View } from "react-native";

import React from "react";

const CategoriesScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola! Bienvenidos a reserva de Medicamentos de Hp Farma</Text>
      <Button title="Iniciar Pedido" onPress={() => navigation.navigate("Medicamento")} />
    </View>



  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6495ED",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Roboto",
    backgroundColor: "white",
  },
});
