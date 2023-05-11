import { useFonts } from "expo-font";
import { Membership } from "./src/screens";
import { useCallback, useEffect, useState } from "react";
import {
  Maitree_400Regular,
  Maitree_500Medium,
} from "@expo-google-fonts/maitree";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { ScrollView, StyleSheet, View } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, error] = useFonts({
    Maitree_400Regular,
    Maitree_500Medium,
  });

  const onLayoutRootView = useCallback(async () => {
    if (true) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return true ? (
    <ScrollView onLayout={onLayoutRootView} style={styles.appContainer}>
      <Membership />
      <StatusBar style='inverted' />
    </ScrollView>
  ) : (
    <></>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: "#070707",
  },
});
