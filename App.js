import { loadAsync } from "expo-font";
import { Membership } from "./src/screens";
import { useCallback, useEffect, useState } from "react";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  // const fetchFonts = async () =>
  //     await loadAsync({
  //         Maitree400: require("./src/assets/fonts/Maitree-Regular.ttf"),
  //         Maitree500: require("./src/assets/fonts/Maitree-Medium.ttf"),
  //     });

  useEffect(() => {
    (async () => {
      setFontsLoaded(false);
      // await fetchFonts();
      setFontsLoaded(true);
    })();
  });

  return fontsLoaded ? <Membership /> : <></>;
}
