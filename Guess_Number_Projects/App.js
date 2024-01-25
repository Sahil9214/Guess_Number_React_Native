import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./Constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-fonts";
import AppLoading from 'expo-app-loading'
export default function App() {
  const [useNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(true);

  const[fontLoaded] =useFonts({
    "open-sans": require("./assets/fonts/open-sans/OpenSans-Bold.ttf"),
  });
if(!fontLoaded){
  return <AppLoading/>
}
  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }
  let Screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if (useNumber) {
    Screen = <GameScreen useNumber={useNumber} />;
  }
  if (gameIsOver && useNumber) {
    screen = <GameOverScreen />;
  }
  return (
    <LinearGradient
      colors={["#4e0329", Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        style={styles.rootScreen}
        resizeMode="cover"
        source={require("./assets/Images/background.jpg")}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{Screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}
//Imagebackground help to add image in background
const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
