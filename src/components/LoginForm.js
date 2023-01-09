import React from "react";
import { Text, Button, TextInput, View } from "react-native";

export default function LoginForm() {
  return (
    <View>
      <Text> ---------------------------</Text>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Contraseña" />
      <Button title="Enviar" onPress={() => console.log("Enviado")} />
    </View>
  );
}
