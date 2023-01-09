import { View, Text, Button, SafeAreaView } from "react-native";
import React from "react";

export default function SettingScreen(props) {
  const { navigation } = props;
  const goToPage = (pageName) => {
    navigation.navigate(pageName);
  };

  return (
    <SafeAreaView>
      {console.log("cassssa")}
      <Text>SettingScreensss</Text>
      <Text>SettingScreen</Text>
      <Text>SettingScreen</Text>
      <Text>SettingScreen</Text>
      <Text>SettingScreen</Text>
      <Text>SettingScreen</Text>
      <Text>SettingScreenss</Text>
      <Button title="Ir a Home" onPress={() => goToPage("Home")} />
    </SafeAreaView>
  );
}
