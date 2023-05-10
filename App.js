import { loadAsync } from "expo-font";
import { Membership } from "./src/screens";

export default function App() {
    const fetchFonts = async () =>
        await loadAsync({
            Maitree: require("./src/assets/fonts/Maitree-Regular.ttf"),
            Maitree500: require("./src/assets/fonts/Maitree-Medium.ttf"),
        });

    return <Membership />;
}
